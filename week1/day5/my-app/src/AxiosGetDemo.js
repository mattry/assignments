import axios from "axios";
import { useState, useEffect } from "react";
import DisplayPost from "./DisplayPosts";

const AxiosGetDemo = () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setPosts(response.data);
        })
        .catch(error => {
            console.error("Error fetching posts: ", error);
        })
    }),[];

    return(
        <DisplayPost posts={posts} />
    );
}

export default AxiosGetDemo;