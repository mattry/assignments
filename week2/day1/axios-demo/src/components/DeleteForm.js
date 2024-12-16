const DeleteForm = ({id, setId, submitHandler}) => {
    return (
        <>
        <form onSubmit={submitHandler}>
        <label htmlFor="id">Post id to be deleted: </label>
        <input 
            name="id"
            type="number"
            value={id}
            onChange={(e)=>setId(e.target.value)}
        /><br/>
        <button>Delete post</button>
        </form>
        </>
    );
};

export default DeleteForm;