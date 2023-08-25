import React from 'react'
import { Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className='container'>
        <h1 className='home_heading'>Home</h1>
        <p>Login / Signup to continue</p>
        <div className='home_btns'>
          <button className='btn'><Link to="login">Login</Link></button>
          <button className='btn'><Link to="signup">SignUp</Link></button>
        </div>
    </div>
  )
}
