import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'

const Register = () => {
  return (
    <div>
       <Header/>
        <div className='container'>
        <h2>Register Page</h2>
        <Link to={`/`}>Login</Link>
        </div>
    </div>
  )
}


export default Register