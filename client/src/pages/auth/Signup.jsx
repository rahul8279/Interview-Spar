import { Link } from "react-router-dom";
import image from "../../assets/react.svg"
import { FaRegTrashAlt } from "react-icons/fa";

function Signup() {
  return (
    // Main container to center the signup form on the screen
    <div className="bg-gray-400 flex items-center justify-center min-h-screen font-sans py-12">
      
      {/* Signup Card */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create an account
          </h1>
          <p className="text-gray-500">
            Enter your details below to get started.
          </p>
        </div>

        {/* Profile Image Section */}
       

        {/* Form Section */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Input Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
            />
          </div>
          
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
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
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
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
            />
          </div>

          {/* Signup Button */}
          <div>
            <button
              type="submit"
              className="w-full mt-4 px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
            >
              Sign Up
            </button>
          </div>
          <span>Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Signup