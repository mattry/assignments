let fetchRes = fetch("https://jsonplaceholder.typicode.com/posts/1");

fetchRes.then(res=>
    res.json()).then(
        data=>{
            console.log(data)
        }
    ).catch((error)=>{
        console.log(error);
    })