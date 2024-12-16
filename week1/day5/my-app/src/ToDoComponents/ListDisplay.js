const ListDisplay = ({toDoItems}) => {
    return (
        <>
            {toDoItems.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </>
    )
}

export default ListDisplay;