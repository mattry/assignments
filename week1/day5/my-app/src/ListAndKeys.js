import { useState, useEffect } from "react";
import CommentDisplayComponent from "./CommentDisplayComponent";

const ListAndKeys = () => {

    const [comments, setComments] = useState([
            {
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "id": 2,
              "title": "qui est esse",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
              "id": 3,
              "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
              "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
              "id": 4,
              "title": "eum et est occaecati",
              "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
              "id": 5,
              "title": "nesciunt quas odio",
              "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
            }
        ]);

    const [name, setName] = useState("Matt");
    
    // useEffect can be given a second optional parameter, the dependency
    // with this, the useEffect only happens based on the dependency
    // often used with fetching data from different endpoints
    useEffect(() => (
        console.log("Use effect hook called")
    ),[name])

    const handleDelete = (commentId) => {
        // change the state of what is rendered, without changing the real data
        const newComment = comments.filter(comment => comment.id !== commentId);
        setComments(newComment);
    }

    return(
        <>
        <h2>List and Keys</h2>
        <CommentDisplayComponent comments={comments} handleDelete = {handleDelete}/>
        <button onClick={()=>setName('Different Name')}>Change Name</button>
        </>
    );

}

export default ListAndKeys;