import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import './login.css'
const Login = () => {

  const navigate = useNavigate();
  const [login,setlogin]=useState({
    email:'',
    password:''
  });
const handleChange = ({target:{name,value}})=>{
  setlogin({...login,[name]:value})
}
const handleSubmit = (e)=>{
  e.preventDefault();
  const email_log = Cookies.get('register_email');
  const password_log = Cookies.get('register_password');
 
  if(login.email===email_log && login.password ===password_log){
        localStorage.setItem("login",true);
        navigate("/")
  }
  else{
    alert('email password not match enter correct email and password 😒');
  }
}


useEffect(() => {
//  if(Cookies.get('register')){
//   navigate('/register')
//  }
}, []);

  return (
    <div>
      <div className='bg'>

         <div className="content">
      <div className="flex-div">
        <div className="name-content">
          <h3 className="logo">Shop<span>Now</span>
          </h3>
          {/* <p>Connect with friends and the world around you on Facebook.</p> */}
        </div>
          <form className='form_login' onSubmit={handleSubmit}>
            <input type="text" name='email' placeholder="Email or Phone Number" onChange={handleChange} value={login.email} required />
            <input type="password" name='password' placeholder="Password" value={login.password} onChange={handleChange} required />
            <button className="login" type='submit'>Log In</button>
            <a href="#">Forgot Password ?</a>
            <hr />
            <Link className="create-account" to='/register'>Create New Account</Link>
          </form>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Login