import { useState } from "react";
import ListCount from "./ListCount";
import ListDisplay from "./ListDisplay";
import ListAdd from "./ListAdd";

const ToDoList = () => {

    const [value, setValue] = useState("");
    const [toDoItems, setList] = useState([]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        setList((prevList) =>{return [...prevList, value]})
        // clear text field after use
        setValue("");
    }

    return (
        <div>
            <h3>To Do List</h3><br/>
            <ListAdd value={value} setValue={setValue} submitHandler={submitHandler} />
            <ListDisplay toDoItems={toDoItems} />
            <br/>
            <ListCount toDoItems={toDoItems}/>
        </div>
    );

}

export default ToDoList;