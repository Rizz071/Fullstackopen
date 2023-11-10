const InputNumber = ({ newNumber, setNewNumber }) => {
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
    )
}

export default InputNumber