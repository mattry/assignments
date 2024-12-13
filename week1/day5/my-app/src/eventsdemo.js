const EventDemo = () => {

    const handleClick = () => {
        console.log("Hello Click");
    }
    const handleOtherClick = (name) => {
        console.log("Hello " + name);
    }

    return(
        <>
        <h2>Event Demo</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>handleOtherClick("Matt")}>Click Me</button>
        </>
    )
};

export default EventDemo;