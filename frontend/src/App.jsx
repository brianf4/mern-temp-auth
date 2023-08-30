import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages & components
import Index from './pages/Index'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Add from './pages/Add'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {

  return (
    <>
        <Routes>
              <Route 
                path='/' 
                element={<Index />} 
              />
              <Route 
                path='/home'
                element={<Home />}
              />
              <Route 
                exact path='edit/:todoId'
                element={<Edit />}
              />
              <Route 
                exact path='home/add'
                element={<Add />}
              />
              <Route
                path='/login'
                element={<Login/>}
              />
              <Route
                path='/signup'
                element={<Signup/>}
              />
        </Routes>    
    </>
  )
}

export default App