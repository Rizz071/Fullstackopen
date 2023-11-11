import { useState, useEffect } from 'react'

import PersonsService from './services/PersonsService'

import AddNewForm from './components/AddNewForm'
import InputFilter from './components/InputFilter'
import NumbersList from './components/NumbersList'

const App = () => {

  useEffect(() => {
    console.log('Effect started.')
    PersonsService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])


  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


  const addPerson = (event) => {
    event.preventDefault()

    // check for double name and for double phone number
    let copyNameFLAG = false
    let copyNumberFLAG = false
    persons.map((person) => {
      if (person.name === newName) copyNameFLAG = true
      if (person.number === newNumber) copyNumberFLAG = true
    })

    if (copyNameFLAG) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    if (copyNumberFLAG) {
      alert(`Phone number ${newNumber} is already added to phonebook to another name`)
      return
    }

    PersonsService
      .addPerson({ name: newName, number: newNumber })
      .then(newPerson => setPersons(persons.concat(newPerson)))
  }

  const removePerson = (id) => {
    const p = persons.find((p) => p.id === id)
    if (window.confirm(`Are you sure to completely remove ${p.name} from the numbers list?`)) {
      console.log(`Attemping to remove person with id ${id} from db.json...`)

      PersonsService
        .delPerson(id)
        .then(() => setPersons(persons.filter((p) => p.id !== id)))
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <InputFilter newFilter={newFilter} setNewFilter={setNewFilter} />

      <h2>Add a new</h2>
      <AddNewForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <NumbersList persons={persons} newFilter={newFilter} removePerson={removePerson} />
    </div>
  )
}

export default App