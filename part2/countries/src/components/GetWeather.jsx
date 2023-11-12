import { useState, useEffect } from "react"

import axios from "axios"

const GetWeather = ({ latlng }) => {

    const [wheather, setWheather] = useState(null)


    const key = 'fc729c594b51076e2d8f9e63fd2d5307'
    const [lat, lon] = latlng

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
            .then(response => {
                setWheather(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))

    }, [])


    if (wheather === null) {
        console.log('Waiting for wheather data...')
        return null
    } else {
        console.log('Wheather data has arrived', wheather)
    }

    return (
        <div>
            <h2>Wheather in {wheather.name}</h2>
            <p>temperature {wheather.main.temp} Celsius</p>
        </div>
    )

}

export default GetWeather