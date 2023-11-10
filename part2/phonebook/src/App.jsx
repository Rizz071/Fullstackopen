import { useState, useEffect } from 'react'

import axios from 'axios'

import AddNewForm from './components/AddNewForm'
import InputFilter from './components/InputFilter'
import NumbersList from './components/NumbersList'

const App = () => {

  useEffect(() => {
    console.log('effect started...')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Data was retrieved from server: ', response.data)
        setPersons(response.data)
      })
      .catch((error) => {
        console.log('Error catched during retrieving data from server: ', error)
      })
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

    setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <InputFilter newFilter={newFilter} setNewFilter={setNewFilter} />

      <h2>Add a new</h2>
      <AddNewForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <NumbersList persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App