async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        showUsers(data);
    }   catch (error) {
        console.log("something went wrong", error)
    }
}
getUsers();

function showUsers(data){
    data.forEach(item => {
        let h1 = document. createElement('h1')
        h1. innerHTML = '${item.username}';
        document. body.appendChild(h1);
    

    });




