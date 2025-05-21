import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admindashboard.css"

const Dashboard = () => {
  const loggedIn = JSON.parse(localStorage.getItem("matchedData"));
  const navigate = useNavigate();
  const handleLogOut = () => {
    const confirmation = confirm("Are you Sure To Logout");
    if (confirmation) {
      localStorage.removeItem("matchedData");
      if (localStorage.getItem("matchedData")) {
        alert("succesfully logout");
        navigate(`${matchedData.role}Dashboard`);
      }
      else {
      navigate("/login");
    }
  }
    else{

     alert("you choose to stay in the dashboard")
     } 
  };
  return (
    
      <div className="card">
      <h1>Dashboard</h1>
        <h3>Name:{loggedIn.name}</h3>
        <h3>Email:{loggedIn.email}</h3>
      <button type="submit" onClick={handleLogOut}>
        Log Out
      </button>
      </div>
   
  );
};

export default Dashboard;
