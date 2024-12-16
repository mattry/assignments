import axios from "axios";
import { useState, useEffect } from "react";
import DisplayPost from "./DisplayPosts";

const AxiosGetDemo = () => {
    
    const [posts, setPosts] = useState([]);

    useState(() => {
        axios.get("http://localhost:8000/posts")
        .then(response => {
            setPosts(response.data);
        })
        .catch(error => {
            console.error("Error fetching posts: ", error);
        })
    });

    return(
        <DisplayPost posts={posts} />
    );
}

export default AxiosGetDemo;