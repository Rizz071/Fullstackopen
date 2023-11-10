import { useState } from 'react'

import InputName from './components/InputName'
import InputNumber from './components/InputNumber'
import NumbersList from './components/NumbersList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '+358 408 7620' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


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

    setPersons(persons.concat({ name: newName, number: newNumber }))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <InputName newName={newName} setNewName={setNewName} />
        <InputNumber newNumber={newNumber} setNewNumber={setNewNumber} />
        <button type="submit">add</button>
      </form>
      <NumbersList persons={persons} />
    </div>
  )
}

export default App