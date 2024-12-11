const list = document.getElementById("my-list");

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addItem);

function removeItem(event){
    console.log("item removed");
    let listItem = event.target.parentElement;
    list.removeChild(listItem);
}

function completeItem(event){
    console.log("item completed");
    let listItem = event.target.parentElement;

    if(listItem.className == "completed-item") {
        listItem.className = "to-do"
    } else {
        listItem.className = "completed-item";
    }
}

function addItem(){
    let input = document.getElementById("text1");
    let content = input.value;

    // prevent adding empty to-do items to the list
    if (content == ""){
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = content;
    list.appendChild(listItem);
    listItem.className = "to-do";

    // add completed button
    let completedButton = document.createElement("button");
    completedButton.className = "completed-button";
    completedButton.innerText = "Completed";
    listItem.appendChild(completedButton);
    completedButton.addEventListener("click", completeItem);

    // add delete button
    let removeButton =  document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.innerText = "Remove";
    listItem.appendChild(removeButton);
    removeButton.addEventListener("click", removeItem);

    // make items editable 
    listItem.onclick = () => {
        listItem.contentEditable = true;
    }


    // clear input text and input selected for repeat adding
    input.value="";
    input.focus();

}