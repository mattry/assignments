const MakePostForm = ({submitHandler, body, title, setBody, setTitle}) => {

    return (
        <>
        <form onSubmit={submitHandler}>
        <label htmlFor="title">Title: </label>
        <input 
            name="title"
            type="text"
            value = {title}
            onChange={(e)=>setTitle(e.target.value)}
        />
        <br/>
        <label htmlFor="body">Body: </label>
        <input 
            name="body"
            type="text"
            value = {body}
            onChange={(e)=>setBody(e.target.value)}
        />
        <button>Make post</button>
        </form>
        </>
    );
};

export default MakePostForm;