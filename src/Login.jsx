// import { useState } from 'react';
// import './signup.css';
// import { ToastContainer } from 'react-toastify';
// import { handlerror, handleSuccess } from './util';
// import { useNavigate } from 'react-router';
// import { Link } from "react-router-dom";
// function Login() {

//     const [LoginInfo , setLoginInfo] = useState({
//         email:'',
//         password : ''
//     })
//     const navigate = useNavigate();
//     const handleChange = (e) =>  {
//         const {name , value}  = e.target;
//         console.log(name , value); 
//         const copyLoginInfo = {...LoginInfo};
//         copyLoginInfo[name] = value;
//         setLoginInfo(copyLoginInfo);
//     }
//     const handleLogin = async(e) => {
//         e.preventDefault();
//         const {email , password} =LoginInfo;
//         if(!email || !password){
//             return handlerror('name , email ,password are required ! ');
//         }
//         try{
//             const url =`${import.meta.env.VITE_API_URL}/Login`;
//             const response = await fetch(url, {
//                 method : "POST",
//                 headers : {
//                     'Content-Type' : 'application/json'
//                 },
//                 body : JSON.stringify(LoginInfo)
//             });
//             const result = await response.json();
//             console.log(result);
//             const {success , message , jwtoken , name} = result;
//             if(success){
//                 handleSuccess(message)
//                 localStorage.setItem('token' , jwtoken);
//                 localStorage.setItem('loggedInUser' , name);
//                 setTimeout(() => {
//                     navigate('/Home')
//                 },1000)
//             }
//         }
//         catch(err){
//             handlerror(err);
//         }
//     }
//     return (
//         <div className="signup-container">
//             <h1 className="signup-heading">Login</h1>
//             <form className="signup-form" onSubmit={handleLogin}>
                
//                 <div>
//                     <label htmlFor="email" className="signup-label">Email</label>
//                     <input
//                         onChange={handleChange}
//                         type='email'
//                         name='email'
//                         className="signup-input"
//                         autoFocus
//                         placeholder="Enter your email"
//                         value={LoginInfo.email}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="password" className="signup-label">Password</label>
//                     <input
//                         onChange={handleChange}
//                         type='password'
//                         name='password'
//                         className="signup-input"
//                         autoFocus
//                         placeholder="Enter your password"
//                         value={LoginInfo.password}
//                     />
//                 </div>

//                 <button className="signup-btn" type = "submit">Login</button>
//                 <div className="signup-link">
//                     Doesnot  have an account? <Link to="/Signup">Signup</Link>
//                 </div>
//             </form>
//             <ToastContainer/>
//         </div>
//     );
// }

// export default Login;


import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handlerror, handleSuccess } from "./util";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login() {
  const [LoginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...LoginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = LoginInfo;
    if (!email || !password) {
      return handlerror("Email and password are required!");
    }
    try {
      const url = `${import.meta.env.VITE_API_URL}/Login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LoginInfo),
      });
      const result = await response.json();
      const { success, message, jwtoken, name } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtoken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/Home");
        }, 1000);
      }
    } catch (err) {
      handlerror(err);
    }
  };

  return (
    <div className="w-full h-screen  bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        {/* Left side form */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex justify-center">
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32"
              alt="logo"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>

            <div className="w-full flex-1 mt-8">
              <form
                onSubmit={handleLogin}
                className="mx-auto max-w-xs flex flex-col gap-5"
              >
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={LoginInfo.email}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={LoginInfo.password}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 
                            rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out 
                            flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Login</span>
                </button>
              </form>

              <p className="mt-6 text-xs text-gray-600 text-center">
                Don’t have an account?{" "}
                <Link
                  to="/Signup"
                  className="border-b border-gray-500 border-dotted"
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex items-center justify-center relative overflow-hidden">
          <img
            src="https://wallpaperaccess.com/full/1605760.jpg"
            alt="Signup Illustration"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
