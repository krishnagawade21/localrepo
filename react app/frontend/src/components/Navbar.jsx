import React from 'react'
import logo from '../assets/react.svg';

const Navbar = () => {
  return (
    <>
<nav className='h-24 w-auto bg-amber-200 flex items-center justify-between text-b'>
<div>
    <img src={logo} alt="" className='h-20 w-24 ml-24'/>
</div>
    <div>
        <ul className='flex gap-10 mr-24'>
            <li className='text-3xl '>Home</li>
            <li className='text-3xl '>About</li>
            <li className='text-3xl '>Services</li>
            <li className='text-3xl '>Contact</li>
        </ul>
    </div>
</nav>
    </>
  );
}

export default Navbar