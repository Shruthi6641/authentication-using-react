import React from 'react'
import Signup from './Components/Signup/Signup'
import {Routes,Route} from "react-router-dom"
import Login from './Components/Login/Login'
import AdminDashboard from "./Components/Dashboard/Admindashboard"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Signup/>}></Route>
        <Route path='/login'element={<Login/>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
