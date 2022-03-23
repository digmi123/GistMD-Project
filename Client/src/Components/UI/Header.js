import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className="header">
        <Link style={{textDecoration:"none"}} id="Home" to="/">
            <h1 className="logo">Patient Management System</h1>
        </Link>
    </div>
  )
}

export default Header