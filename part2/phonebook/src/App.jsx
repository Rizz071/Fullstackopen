import { useState, useEffect } from 'react'

import PersonsService from './services/PersonsService'

import AddNewForm from './components/AddNewForm'
import InputFilter from './components/InputFilter'
import NumbersList from './components/NumbersList'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {

  //Side effect in action! :)
  useEffect(() => {
    console.log('Effect started.')
    PersonsService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])


  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)

  const addPerson = (event) => {
    event.preventDefault()

    let FLAGtoExit = false

    //Running through all persons
    persons.forEach((person) => {

      //Checking if we have identical names or phone numbers
      if (person.name.toLowerCase() === newName.toLowerCase() || person.number.toLowerCase() === newNumber.toLowerCase()) {

        //Setting up FLAG to not add new Person to list
        FLAGtoExit = true

        //New Person === Old Person AND New Number === Old Number -> doing nothing
        if (person.name.toLowerCase() === newName.toLowerCase() && person.number.toLowerCase() === newNumber.toLowerCase()) {
          setError(`${newName} is already added to phonebook`)
          setTimeout(() => {
            setError(null)
          }, 3000)
        }

        //New Person !== Old Person AND New Number === Old Number -> doing nothing
        if (person.name.toLowerCase() !== newName.toLowerCase() && person.number.toLowerCase() === newNumber.toLowerCase()) {
          setError(`Phone number ${newNumber} is already added to phonebook`)
          setTimeout(() => {
            setError(null)
          }, 3000)
        }

        //New Person === Old Person AND New Number !== Old Number -> replacing numbers
        if (person.name.toLowerCase() === newName.toLowerCase() && person.number.toLowerCase() !== newNumber.toLowerCase()) {
          if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
            PersonsService
              .replacePerson({ name: newName, number: newNumber, id: person.id })
              .then(() => {

                setPersons(persons.map(p => p.id !== person.id ? p : { name: newName, number: newNumber, id: person.id }))

                setNotification(`Old number of ${person.name} was replaced by ${newNumber}`)
                setTimeout(() => {
                  setNotification(null)
                }, 3000)
              })
              .catch((error) => {
                setError(`Error catched during replaceing person in server: ${error.message}`)
                setTimeout(() => {
                  setError(null)
                }, 3000)
              })
          }
        }
      }
    })

    //If FLAG was set -> doing nothing
    //else -> adding new Person to db.json
    if (!FLAGtoExit) {
      PersonsService
        .addPerson({ name: newName, number: newNumber })
        .then(newPerson => {

          setNotification(`${newName} was added to database`)
          setTimeout(() => {
            setNotification(null)
          }, 3000)
          setPersons(persons.concat(newPerson))
        })
        .catch((error) => {
          setError(`Error catched during adding person to server: ${error.message}`)
          setTimeout(() => {
            setError(null)
          }, 3000)
        })
    }
  }

  const removePerson = (id) => {
    const p = persons.find((p) => p.id === id)
    if (window.confirm(`Are you sure to completely remove ${p.name} from the numbers list?`)) {
      console.log(`Attemping to remove person with id ${id} from db.json...`)

      PersonsService
        .delPerson(id)
        .then(() => setPersons(persons.filter((p) => p.id !== id)))
        .catch(error => {
          setError(`Information of ${p.name} was already removed from server`)
          setTimeout(() => {
            setError(null)
          }, 5000)

          setPersons(persons.filter(person => person.id !== p.id))
        })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <InputFilter newFilter={newFilter} setNewFilter={setNewFilter} />

      <h2>Add a new</h2>
      <Notification message={notification} />
      <Error message={error} />
      <AddNewForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <NumbersList persons={persons} newFilter={newFilter} removePerson={removePerson} />
    </div>
  )
}

export default App