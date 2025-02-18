import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className="container">
        <h2>Login Page</h2>
        <Link to="/register">Register</Link>
        </div>
    </div>
  )
}

export default Login
