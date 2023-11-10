const NumbersList = ({ persons, newFilter }) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {persons
                    .filter((person) => {
                        if (newFilter === '') return true
                        if (person.name.toLowerCase().includes(newFilter.toLowerCase())) return true
                        if (person.number.toLowerCase().includes(newFilter.toLowerCase())) return true
                    })
                    .map((person) => <li key={person.name}>{person.name}&emsp;{person.number}</li>)}
            </ul>
        </>
    )
}

export default NumbersList