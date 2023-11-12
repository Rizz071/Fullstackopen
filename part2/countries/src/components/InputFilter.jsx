const InputFilter = ({ filter, setFilter }) => {

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }


    return (
        <form>
            <label>
                find countries <input type='text' name='filterInput' value={filter} onChange={handleFilter} />
            </label>
        </form>
    )
}

export default InputFilter