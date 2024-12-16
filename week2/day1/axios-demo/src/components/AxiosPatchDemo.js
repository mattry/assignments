import { useState } from "react";
import MakePatchForm from "./MakePatchForm";
import axios from "axios";

const AxiosPatchDemo = () => {

    const [postId, setId]= useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        const request = {
            title: title,
            body: body
        };

        try {
            const response = await axios.patch(`http://localhost:8000/posts/${postId}`, request);
            console.log("Post updated successfully", response.data);
            setId("");
            setTitle("");
            setBody("");
        } catch (error) {
            console.error("Error updating post: ", error);
        }
    };

    return(
        <>
        <MakePatchForm submitHandler={submitHandler} postId={postId} body={body} title={title} setId={setId} setBody={setBody} setTitle={setTitle} />
        </>
    )


}

export default AxiosPatchDemo;