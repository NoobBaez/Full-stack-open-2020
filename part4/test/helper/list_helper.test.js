const listHelper = require('../../utils/list_helper')
const listBlogHelper = require('./test_blogs_helper')

test('dummy return one', () => {
    const result = listHelper.dummy(listBlogHelper.blogs)

    expect(result).toBe(1)
})

describe('total likes', () => {
    test('of empty list is zero', () => {
        expect(listHelper.totalLikes([])).toBe(0)
    })

    test('when list has only one blog equals the likes of that', () => {
        expect(listHelper.totalLikes([listBlogHelper.initialBlogs[0]])).toBe(4)
    })

    test('of a bigger list is calculated right', () => {
        expect(listHelper.totalLikes(listBlogHelper.initialBlogs)).toBe(23)
    })
})

describe('favorite blog', () => {
    test('finds out which blog has most likes', () => {
        expect(listHelper.favoriteBlog(listBlogHelper.initialBlogs)).toEqual(
            {
                title: "Dance-ML",
                author: "Obed Baez",
                likes: 6,
            }
        )
    })
})

describe('most blogs', () => {
    test('returns the author who has the largest amount of blogs', () => {
        expect(listHelper.mostBlogs(listBlogHelper.initialBlogs)).toEqual({ "author": "Haniel Baez", "blogs": 3 })
    })
})

describe('most likes', () => {
    test('the author, whose blog posts have the largest amount of likes', () => {
        expect(listHelper.mostLikes(listBlogHelper.initialBlogs)).toEqual({ "author": "Another Person", "likes": 9 })
    })
})