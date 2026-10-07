import React from 'react'
import Navbar from './components/Navbar'
import Example from './components/Example'
import Api from './components/Api'

const App = () => {
  return (
    
    <>
    <Navbar/>
    <h1 className='text-3xl text-red-950'>React Application</h1>
    <Example/>
    <Api/>
    
    </>
  )
}

export default App