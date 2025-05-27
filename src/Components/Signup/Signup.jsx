import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./Signup.css";
import { useNavigate ,Link} from "react-router-dom";

const Signup = () => {
  const [signupDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  let navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signupDetails);

    let allUserData = JSON.parse(localStorage.getItem("FormData")) || [];
    let existingUser = allUserData.find((u) => u.email === signupDetails.email && u.role===signupDetails.role);
    if (existingUser) {
      alert("Already Registered.");
      return;
    } else {
      allUserData.push(signupDetails);
      localStorage.setItem("FormData", JSON.stringify(allUserData)); //used to update the users into an array
      alert("successfully signup");
      // localStorage.setItem("FormData",JSON.stringify(signUpDetails))
      
      setSignUpDetails({name:"",email:"",password:"",role:""})
      navigate("/login");
    }
  };
  return (
    <div>
      <Form className="form" onSubmit={handleSignup}>
        <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>Signup</h1>
        <br />
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="Text"
            required
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, email: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, password: e.target.value })
            }
          />
        </Form.Group>

        <Form.Select
          aria-label="Default select example"
          onChange={(e) =>
            setSignUpDetails({ ...signupDetails, role: e.target.value })
          }
        >
          <option>Select your Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </Form.Select>
        <br />
        <p style={{ textAlign: "center" }}>
          Already Registered? <Link to='/login'>Login</Link>
        </p>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
