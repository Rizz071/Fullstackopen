const NumbersList = ({ persons }) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => <li key={person.name}>{person.name}</li>)}
            </ul>
        </>
    )
}

export default NumbersList