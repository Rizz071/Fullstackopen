import { useState, useEffect } from 'react'

import axios from 'axios'

import InputFilter from './components/InputFilter'
import OutputField from './components/OutputFiled'


function App() {

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const baseURL_all = 'https://studies.cs.helsinki.fi/restcountries/api/all'
  const baseURL_search = 'https://studies.cs.helsinki.fi/restcountries/api/name/'


  //Getting full list of Countries via API
  useEffect(() => {
    axios.get(baseURL_all)
      .then(response => {
        console.log('Full list of countires was retrieved successfully')
        setCountries(countries.concat(response.data))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <>
      <InputFilter filter={filter} setFilter={setFilter} />
      <OutputField filter={filter} setFilter={setFilter} countries={countries} />
    </>
  )
}

export default App
