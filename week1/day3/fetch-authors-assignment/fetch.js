const authorsHeader = document.getElementById("authors-header");
authorsHeader.onclick = populateAuthorData;

const authorList = document.getElementById("authors-list")

async function getAuthorData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

async function populateAuthorData(){
    let authors = await getAuthorData();
    authors.forEach(author => {
        const listItem = document.createElement("li");
        listItem.textContent = `${author.name} | ${author.email} | ${author.phone}`
        authorList.appendChild(listItem);
    });
}
