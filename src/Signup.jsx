
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handlerror, handleSuccess } from "./util";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Signup() {
  const [signupInfo, setsignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handlerror("Name, email, and password are required!");
    }
    try {
      const url = `${import.meta.env.VITE_API_URL}/Signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/Login");
        }, 1000);
      }
    } catch (err) {
      handlerror(err);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        {/* Left side form */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex justify-center">
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Signup</h1>

            <div className="w-full flex-1 mt-8">
              <form
                onSubmit={handleSignup}
                className="mx-auto max-w-xs flex flex-col gap-5"
              >
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={signupInfo.name}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupInfo.email}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                            placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={signupInfo.password}
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
                  <span className="ml-3">Signup</span>
                </button>
              </form>

              <p className="mt-6 text-xs text-gray-600 text-center">
                Already have an account?{" "}
                <Link
                  to="/Login"
                  className="border-b border-gray-500 border-dotted"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right side illustration */}
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex items-center justify-center relative overflow-hidden">
          <img
            src="https://wallpaperaccess.com/full/1605760.jpg"
            alt="Signup Illustration"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
