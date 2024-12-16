const MakePatchForm = ({ submitHandler, postId, body, title, setId, setBody, setTitle }) => {

    return (
        <>
        <form onSubmit={submitHandler}>
        <label htmlFor="postId">Post id to be updated: </label>
        <input 
            name="postId"
            type="number"
            value={postId}
            onChange={(e)=>setId(e.target.value)}
        /><br/>
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
        <button>Update post</button>
        </form>
        </>
    );
};

export default MakePatchForm;