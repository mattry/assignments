import { useState } from "react";

const StateDemo = () => {

    //let name = "Matt";
    // useState is a hook we are giving this variable an initial state
    // the hook takes on two values
        // the initial variable
        // the method that will change the state
    const [name, setName] = useState("Matt")

    function changeName(s) {
        setName(s);
    }

    return (
        <>
        <h2>{name}</h2>
        <button onClick={()=>changeName("New Name")}>Change Name</button>
        </>
    )
}

export default StateDemo;