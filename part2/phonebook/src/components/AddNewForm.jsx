import InputName from './InputName'
import InputNumber from './InputNumber'

const AddNewForm = ({ addPerson, newName, setNewName, newNumber, setNewNumber }) => {
    return (
        <>
            <form onSubmit={addPerson}>
                <InputName newName={newName} setNewName={setNewName} />
                <InputNumber newNumber={newNumber} setNewNumber={setNewNumber} />
                <button type="submit">add</button>
            </form>
        </>
    )
}

export default AddNewForm