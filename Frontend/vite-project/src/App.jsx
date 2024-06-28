import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Producs from './components/Producs'
import ViewStudents from './components/ViewStudents'
import AddStudents from './components/AddStudents'
import HomePage from './components/HomePage'
const App = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
       <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/l' element={<Login/>}/>
      <Route path='/s' element={<Signup/>}/>
      <Route path='/t' element={<Producs/>}/>
      <Route path='/f' element={<ViewStudents/>}/>
      <Route path='/i' element={<AddStudents/>}/>


    </Routes>
    </div>
  )
}

export default App
