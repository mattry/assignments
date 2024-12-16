const ListAdd = ({value, setValue, submitHandler}) => {

    return (
        <>
        <form onSubmit={submitHandler}>
        <input 
            type="text" 
            value={value} 
            onChange={(e)=>setValue(e.target.value)} />
        <button>Add</button><br/>
        </form>
        </>
    )
}

export default ListAdd;