import React, { useState } from "react";
import { Link } from "react-router-dom";

  function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    alert("Logged in!");
  };

 return (
    // Main container to center the login form on the screen
    <div className="bg-gray-400 flex items-center justify-center min-h-screen font-sans">
      
      {/* Login Card */}
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500">
            Please enter your details to log in.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email Input Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            />
          </div>

          {/* Password Input Field */}
          <div>
            <label 
              htmlFor="password" 
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
            >
              Log In
            </button>
          </div>
          <span>Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link></span>
        </form>
      </div>
    </div>
  );
}
export default Login;