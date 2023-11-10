import { useState } from 'react'

import InputName from './components/InputName'
import ButtonSubmit from './components/ButtonSubmit'
import NumbersList from './components/NumbersList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')


  const addName = (event) => {
    event.preventDefault()

    // check for double name
    let copyName = false
    persons.map((person) => {
      if (person.name === newName) copyName = true
    })

    copyName ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat({ name: newName }))
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <InputName newName={newName} setNewName={setNewName} />
        <ButtonSubmit />
      </form>
      <NumbersList persons={persons} />
    </div>
  )
}

export default App