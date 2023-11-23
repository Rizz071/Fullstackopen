import axios from 'axios'

const baseURL = '/api/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request
        .then(response => response.data)
}

const addPerson = (person) => {
    const request = axios.post(baseURL, person)
    return request
        .then(response => {
            console.log(`Adding `, person, ` to db.json was successfull.`)
            return response.data
        })
}

const delPerson = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request
        .then(response => console.log(`Received response from axios: statusText: ${response.statusText}`))
}

const replacePerson = (personToReplace) => {
    const request = axios.put(`${baseURL}/${personToReplace.id}`, personToReplace)
    return request
        .then(response => {
            console.log(`Replacing `, personToReplace, ` in db.json was successfull.`)
            return response.data
        })
}

export default {
    getAll,
    addPerson,
    replacePerson,
    delPerson
}