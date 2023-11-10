import { useState } from 'react'

import InputName from './components/InputName'
import InputNumber from './components/InputNumber'
import InputFilter from './components/InputFilter'
import NumbersList from './components/NumbersList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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
      <form onSubmit={addPerson}>
        <InputName newName={newName} setNewName={setNewName} />
        <InputNumber newNumber={newNumber} setNewNumber={setNewNumber} />
        <button type="submit">add</button>
      </form>
      <NumbersList persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App