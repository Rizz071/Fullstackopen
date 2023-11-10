const InputName = ({ newName, setNewName }) => {
    const handleNameChange = (event) => {
        event.preventDefault()
        setNewName(event.target.value)
    }

    return (
        <div>
            name: <input value={newName} onChange={handleNameChange} />
        </div>
    )
}

export default InputName