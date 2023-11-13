import { useState } from 'react'
import GetWeather from './GetWeather'



const OutputField = ({ filter, setFilter, countries }) => {

    const filteredList = countries.filter(country => country.name.official.toLowerCase().includes(filter.toLowerCase()) || country.name.common.toLowerCase().includes(filter.toLowerCase()))

    //Waiting for data arriving through request by axios
    if (countries.length === 0) {
        console.log('Waiting for all countries data...')
        return null
    } else {
        console.log(`Data arrived. Total ${countries.length} countries.`)
    }



    if (filteredList.length === 1) {
        return (
            <div>
                <h1>{filteredList[0].name.official}</h1>
                <p>Capital: {filteredList[0].capital}</p>
                <p>Area: {filteredList[0].area}</p>

                <h2>languages:</h2>
                <ul>{Object.values(filteredList[0].languages).map(language => <li key={language}>{language}</li>)}</ul>

                <img src={filteredList[0].flags.svg} alt={filteredList[0].flags.alt} style={{ width: '10%', border: '1px solid #555' }} />
                <GetWeather latlng={filteredList[0].capitalInfo.latlng} />
            </div>
        )
    }

    if (filteredList.length > 1 && filteredList.length <= 10) {
        return (
            filteredList.map((country) => {
                return <li key={country.name.official}>{country.name.official} <button onClick={() => setFilter(country.name.official)}>show</button></li>
            })
        )
    }

    if (filteredList.length > 10) {
        return <p>Too many matches, specify another filter </p>
    }

}



export default OutputField