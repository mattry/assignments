import CommentDemo from "./commentDemo";

const PostDemo = () => {
    
    let comments = ['Comment One', 'Comment Two', 'Comment Three', 'Comment Four', 'Comment Five'];

    return (
        <>
            <h1>This is a post:</h1>
            <hr/>
            <h2>These are the post's comments:</h2>
            <ul>
                {comments.map(comment => (
                    <CommentDemo key={comment} comment={comment} />
                ))}
            </ul>
        </>
    );

}

export default PostDemo;