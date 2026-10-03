async function getUsers(){
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await responce.json();
        console.log(data);
        showUsers(data);
    } catch (error) {
        console.log("something went wrong",error)
    }
}
getUsers();

function showUsers(data){
    data.forEach(item => {
        let h1= document.createElement('h1')
        h1.innerHTML=`${item.username}`;
        document.body.appendChild(h1);
        

        let p=document.createElement('p')
        p.innerHTML=`${item.email}`;
        document.body.appendChild(p);
        
    });

}



