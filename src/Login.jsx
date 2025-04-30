import { useState } from 'react';
import './signup.css';
import { ToastContainer } from 'react-toastify';
import { handlerror, handleSuccess } from './util';
import {  useNavigate } from 'react-router';
function Login() {

    const [LoginInfo , setLoginInfo] = useState({
        email:'',
        password : ''
    })
    const navigate = useNavigate();
    const handleChange = (e) =>  {
        const {name , value}  = e.target;
        console.log(name , value); 
        const copyLoginInfo = {...LoginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }
    const handleLogin = async(e) => {
        e.preventDefault();
        const {email , password} =LoginInfo;
        if(!email || !password){
            return handlerror('name , email ,password are required ! ');
        }
        try{
            const url =`${import.meta.env.VITE_API_URL}/Login`;
            const response = await fetch(url, {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(LoginInfo)
            });
            const result = await response.json();
            console.log(result);
            const {success , message , jwtoken , name} = result;
            if(success){
                handleSuccess(message)
                localStorage.setItem('token' , jwtoken);
                localStorage.setItem('loggedInUser' , name);
                setTimeout(() => {
                    navigate('/Home')
                },1000)
            }
        }
        catch(err){
            handlerror(err);
        }
    }
    return (
        <div className="signup-container">
            <h1 className="signup-heading">Login</h1>
            <form className="signup-form" onSubmit={handleLogin}>
                
                <div>
                    <label htmlFor="email" className="signup-label">Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        className="signup-input"
                        autoFocus
                        placeholder="Enter your email"
                        value={LoginInfo.email}
                    />
                </div>

                <div>
                    <label htmlFor="password" className="signup-label">Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        className="signup-input"
                        autoFocus
                        placeholder="Enter your password"
                        value={LoginInfo.password}
                    />
                </div>

                <button className="signup-btn" type = "submit">Login</button>
                <div className="signup-link">
                    Doesnot  have an account? <a href="/Signup">Signup</a>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default Login;
