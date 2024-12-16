import axios from "axios";
import { useEffect, useState } from "react";
import MakePostForm from "./MakePostForm";
import DisplayPost from "./DisplayPosts";

// this component will render a form, that form will get the input needed to make a new post, which should just be title and body
// on submitting the form, the data will be sent to the db using axios.post
const AxiosPostDemo = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        const request = {
            title: title,
            body: body
        };

        try {
            const response = await axios.post("http://localhost:8000/posts", request);
            console.log("Post created successfully", response.data);
            setTitle("");
            setBody("");
        } catch (error) {
            console.error("Error making post: ", error);
        }
    };
    
    return(
        <>
        <MakePostForm submitHandler={submitHandler} body={body} title={title} setBody={setBody} setTitle={setTitle} />
        </>
    )

        
    
}

export default AxiosPostDemo;