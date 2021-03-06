const blogRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const Blog = require('../model/blogs')
const User = require('../model/users')

const getTokenFrom = (request, response, next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        request.token = authorization.substring(7)
    }
    next()
}

blogRouter.use(getTokenFrom)

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
        .populate('user', { username: 1, name: 1, id: 1 })
    response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
    const body = request.body
    console.log(`The token is ${request.token}`)
    const decodedToken = jwt.verify(request.token, config.SECRET)

    if (!request.token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    if (body.title && body.url) {
        const blog = new Blog({ ...body, user: user._id })
        const savedBlog = await blog.save()

        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()

        response.status(201).json(savedBlog)
    } else {
        response.status(400).end({ error: 'missing properties' })
    }
})

blogRouter.delete('/:id', async (request, response) => {
    const decodedToken = jwt.verify(request.token, config.SECRET)

    if (!(request.token || !decodedToken)) {
        return response.status(400).json({ error: 'missing or wrong token' })
    }

    const blogToEliminate = await Blog.findById(request.params.id)
    if (!blogToEliminate) {
        return response.status(404).json({ error: 'blog no found' })
    }

    if (decodedToken.id.toString() === blogToEliminate.user.toString()) {
        await Blog.findByIdAndDelete(request.params.id)
        response.status(200).send()
    } else {
        response.status(401).json({ error: 'does not have credential to eliminate' })
    }
})

blogRouter.put('/:id', async (request, response) => {
    const blogObject = { ...request.body, user: request.body.user.id }
    const result = await Blog
        .findByIdAndUpdate(request.params.id, blogObject)

    response.status(204).json(result)
})

blogRouter.post('/:id/comments', async (request, response) => {
    const blog = await Blog.findById(request.params.id)
    blog.comments = request.body
    const result = await blog.save()
    console.log(result)
    response.status(201).json(result)
})

module.exports = blogRouter