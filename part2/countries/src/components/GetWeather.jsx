import { useState, useEffect } from "react"

import axios from "axios"

const GetWeather = ({ capital, latlng }) => {

    const [weather, setWeather] = useState(null)


    const key = import.meta.env.VITE_API_KEY

    const [lat, lon] = latlng

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
            .then(response => {
                setWeather(response.data)
            })
            .catch(error => console.log(error))

    }, [])


    if (weather === null) {
        console.log('Waiting for weather data...')
        return null
    } else {
        console.log('weather data has arrived', weather)
    }

    return (
        <div>
            <h2>Weather in {weather.name} ({capital})</h2>
            <p>temperature {weather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )

}

export default GetWeather