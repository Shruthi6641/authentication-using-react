import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const[loginDetails,setLoginDetails]=useState({
        email:"",password:""
    })
    const navigate=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(loginDetails)
        const loggedInUser = JSON.parse(localStorage.getItem("FormData"))

        let matchedLoggedInUser=loggedInUser.find((user)=>user.email===loginDetails.email && user.password===loginDetails.password)
        console.log(matchedLoggedInUser)
        if(matchedLoggedInUser){
            localStorage.setItem("matchedData",JSON.stringify(matchedLoggedInUser))
            alert("succesfully LoggedIn")
            setLoginDetails({email:"",password:""})
            navigate(`/${matchedLoggedInUser.role}Dashboard`)
        }
        else{

        }
    }
  return (
    <div>
       <Form className='form' onSubmit={handleLogin}>
            <h1 style={{textAlign:"center", fontFamily:"cursive"}}>Login</h1>
            <br />
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"  required onChange={(e)=>setLoginDetails({...loginDetails,email:e.target.value})}/>
              
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required  onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})}/>
            </Form.Group>
      
           
          <br />
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
    </div>
  )
}

export default Login
