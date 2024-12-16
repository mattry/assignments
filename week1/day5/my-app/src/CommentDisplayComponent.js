// can destructure props using the {js name} of the passed in prop
//const CommentDisplayComponent = (props) => {
const CommentDisplayComponent = ({comments, handleDelete}) => {

    

    return (
        <>
          {comments.map((comment) => (
            <div key={comment.id}>
                <h3>{comment.title}</h3>
                <h4>{comment.body}</h4>
                <button onClick ={() => handleDelete(comment.id)}>
                    Delete Comment
                </button>
            </div>
          ))}
        </>
      );
    };

export default CommentDisplayComponent;