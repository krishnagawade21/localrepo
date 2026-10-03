import React from 'react';
import logo from '../../assets/hero.png';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <nav className='Navbar'>
    <div className="logo">
        <img src={logo} alt ="" className='image'/>
        </div>
        <div className="menusections">
            <ul>
                <li>
                    <Link to='/'>Home </Link>
                    </li>
                <li><Link to='/About'>About</Link>
                </li>
                <li><Link to='/Services'>Services</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link></li>
            </ul>


        </div>

        


   </nav>

   </>
  )
}

export default Navbar