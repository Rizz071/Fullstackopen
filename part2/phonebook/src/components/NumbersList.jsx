const NumbersList = ({ persons, newFilter, removePerson }) => {
    return (
        <ul>
            {persons
                .filter((person) => {
                    if (newFilter === '') return true
                    if (person.name.toLowerCase().includes(newFilter.toLowerCase())) return true
                    if (person.number.toLowerCase().includes(newFilter.toLowerCase())) return true
                })
                .map((person) => {
                    return (<li key={person.name}>
                        {person.name}&emsp;{person.number}
                        &emsp;<button onClick={() => removePerson(person.id)}>del</button>
                    </li>)
                })}
        </ul>
    )
}

export default NumbersList