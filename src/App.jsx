import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'


import './App.css'

const App = () => {
  return (
    <>

    <Header/>
    <Home/>
    


    
    <Routes>
        <Route path='/dabudi' element={<Home/>}/>

    </Routes>
    </>
  )
}

export default App