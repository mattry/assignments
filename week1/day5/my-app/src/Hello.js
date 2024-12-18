import { useContext } from "react";
import TextComponent from "./hoc/TextComponent";
import MyContext from "./context/MyContext";

const Hello = (props) => {
    const sharedData = useContext(MyContext);
    return (
        <>
        <p>Hello, {props.name} </p>
        <TextComponent />
        <p>Hello From MyContext: {sharedData}</p>
        </>
    );
}

// we have to export the module for use elsewhere in the application
export default Hello;