import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {

    //useEffect(()=>{},[])

    const[ data, setdata] = useState([])

    useEffect(()=>{
        const getUsers = async() =>{
            try {
                const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
                setdata(responce.data);
                console.log(responce);
                
            } catch (error) {
                console.log("API is not working,error");
                
            }

        };
        getUsers();
    },[]);

    
  return (
   <>

   <h1>Fetching an API using useEffect</h1>


   {
    data.map((item)=>{
        return(
            <div key={item.id}>
                <h1>{item.name}</h1>
                <h1>{item.username}</h1>
            </div>

        )

    })
   }
   
   
   
   </>
  )
}

export default Api