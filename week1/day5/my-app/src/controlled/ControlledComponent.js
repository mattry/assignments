import { useState } from "react";

const ControlledComponent = () => {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
        <input type="text" value={text} onChange={handleChange}></input>
        <p>{text}</p> 
        </>
    );
}

export default ControlledComponent;

