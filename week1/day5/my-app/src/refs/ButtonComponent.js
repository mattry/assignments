import { useRef } from "react";

const ButtonComponent = () => {

    let count = useRef(1);

    const clickHandler = () => {
        if(count.current === 1){
            alert(`You have clicked ${count.current} time`);
        } else {
            alert(`You have clicked ${count.current} times`);
        }
        count.current++;
    }

    return(
        <>
        <button onClick={clickHandler}>Click Me</button>
        </>
    );

}

export default ButtonComponent;