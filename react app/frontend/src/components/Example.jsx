import React from 'react'
import { useState } from 'react'

const Example = () => {

   //const [ state, setState] = useState(state);

   const [number, setnumber] = useState(0);

    const Increment = () => {
setnumber(number+1);
    }

    const Decrement= () => {
        if (number > 0){
            setnumber(number-1);
        }
    }
  return (
    <>  
    <div className='m-auto h-auto w-3xs bg-gray-700 rounded'>
    <button className='h-16 w-28 bg-green-500 text-amber-50 rounded' onClick={Increment}>Increment</button>

    <h1 className='text-white text-3xl'>Counter:{number}</h1>
    <button className='h-14 w-28 bg-red-300 text-amber-50 rounded' onClick={Decrement}>Decrement</button>
    
   </div> 
    
    </>
  
  );
}

export default Example