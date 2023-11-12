import { useState } from 'react'



const OutputField = ({ filter, countries }) => {

    const filteredList = countries.filter(country => country.name.official.toLowerCase().includes(filter.toLowerCase()) || country.name.common.toLowerCase().includes(filter.toLowerCase()))



    if (filteredList.length === 1) {
        return (
            <div>
                <h1>{filteredList[0].name.official}</h1>
                <p>Capital: {filteredList[0].capital}</p>
                <p>Area: {filteredList[0].area}</p>

                <h2>languages:</h2>
                <ul>{Object.values(filteredList[0].languages).map(language => <li key={language}>{language}</li>)}</ul>

                <img src={filteredList[0].flags.svg} alt={filteredList[0].flags.alt} style={{ width: '10%', border: '1px solid #555' }} />
            </div>
        )
    }

    if (filteredList.length > 1 && filteredList.length <= 10) {
        return (
            filteredList.map((country) => {
                return <li key={country.name.official}>{country.name.official}</li>
            })
        )
    }

    if (filteredList.length > 10) {
        return <p>Too many matches, specify another filter </p>
    }

}



export default OutputField