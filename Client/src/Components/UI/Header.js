import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Header.css'

function Header() {
    const [activeTab, setActiveTab] = useState("Home")

    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === "/"){
            setActiveTab("Home");
        }
        else if(location.pathname === "/add"){
            setActiveTab("AddPatient")
        }

    }, [location])
  return (
    <div className="header">
        <p className="logo">Patient Management System</p>
        <div className="header-right">
            <Link to="/">
                <p className={`${activeTab === "Home" ? "active" : ""}`}
                 onClick={()=>{setActiveTab("Home")}}>Home</p>
            </Link>
            <Link to="/add">
                <p className={`${activeTab === "AddPatient" ? "active" : ""}`}
                 onClick={()=>{setActiveTab("AddPatient")}}>Add Patient</p>
            </Link>
        </div>
    </div>
  )
}

export default Header