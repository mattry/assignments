import axios from "axios";
import DeleteForm from "./DeleteForm";
import { useState } from "react";

const AxiosDeleteDemo = () => {

    const [id, setId]= useState("")

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`http://localhost:8000/posts/${id}`);
            console.log("Post successfully deleted", response.data);
            setId("")

        } catch (error) {
            console.error("Error deleting post: ", error);
        }
    };

    return(
        <>
        <DeleteForm setId={setId} id={id} submitHandler={submitHandler}/>
        </>
    )

}

export default AxiosDeleteDemo;