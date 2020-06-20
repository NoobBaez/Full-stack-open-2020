import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Filter from './Filter'
import Persons from './Persons'
import PersonForm from './PersonForm'

const App = () => {
    const [persons, setPersons] = useState([])

    //this state is use for the filter name
    const [filteredPersona, setFiltered] = useState()

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => setNewName(event.target.value)

    const handleNumberChange = (event) => setNewNumber(event.target.value)

    //effect callback
    const hook = () => {
        axios.get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
                setFiltered(response.data)
            })
    }

    useEffect(hook, [])

    //helper function
    const isValidData = () => {
        const isAlready = persons.some(person =>
            person.name === newName || person.name === '')
        if (isAlready) {
            window.alert(`${newName} is already added to phonebook`)
            return false
        }
        return true
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        if (isValidData()) {
            const personObj = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(personObj))
        }
    }

    const handleFilterChange = (event) => {
        const value = event.target.value.toLowerCase()
        const filtered = persons.filter(person =>
            person.name
                .toLowerCase()
                .trim()
                .includes(value)
        )
        setFiltered(filtered)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onChange={handleFilterChange} />
            <h3>add a new number</h3>
            <PersonForm
                newName={newName}
                newNumber={newNumber}
                handleOnSubmit={handleOnSubmit}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
            />
            <h3>Numbers</h3>
            <Persons
                persons={filteredPersona ? filteredPersona : persons}
            />
        </div>
    )
}
export default App