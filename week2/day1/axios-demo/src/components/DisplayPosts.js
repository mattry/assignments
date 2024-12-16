const DisplayPost = ({posts}) => {

    return(
        posts.map((post) =>(
            <div key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </div>
        ))
    )

}

export default DisplayPost;