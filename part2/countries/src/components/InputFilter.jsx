const InputFilter = ({ filter, setFilter }) => {

    const handleFilterSubmit = (event) => {
        event.preventDefault();
    }

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }


    return (
        <form onSubmit={handleFilterSubmit}>
            <label>
                find countries <input type='text' name='filterInput' value={filter} onChange={handleFilter} />
            </label>
        </form>
    )
}

export default InputFilter