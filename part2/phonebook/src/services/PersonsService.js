import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request
        .then(response => response.data)
        .catch((error) => { console.log('Error catched during retrieving data from server: ', error) })
}

const addPerson = (person) => {
    const request = axios.post(baseURL, person)
    return request
        .then(response => {
            console.log(`Adding `, person, ` to db.json was successfull.`)
            return response.data
        })
        .catch((error) => { console.log('Error catched during adding person to server: ', error) })
}

const delPerson = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request
        .then(response => console.log(`Received response from axios: statusText: ${response.statusText}`))
    // .catch((error) => { console.log('Error catched during deleting PERSON from server: ', error) })
}

const replacePerson = (personToReplace) => {
    const request = axios.put(`${baseURL}/${personToReplace.id}`, personToReplace)
    return request
        .then(response => {
            console.log(`Replacing `, personToReplace, ` in db.json was successfull.`)
            return response.data
        })
        .catch((error) => { console.log('Error catched during replacing person in a server: ', error) })
}

export default {
    getAll,
    addPerson,
    replacePerson,
    delPerson
}