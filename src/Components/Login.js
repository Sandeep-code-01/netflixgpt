import React from 'react'
import { Netflix_Background_Url } from '../Utils/logo'
import Header from './Header'

const Login = () => {
  return (
    <div className="relative h-screen w-full">

      {/* Background */}
      <img
        src={Netflix_Background_Url}
        alt="Netflix Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      {/* Header */}
      <Header />

      {/* Login Form Centered */}
      <div className="flex justify-center items-center h-full">
        <form className="bg-black bg-opacity-80 p-8 rounded w-80 text-white">
          
          <h1 className="text-2xl font-bold mb-6">Sign In</h1>

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 bg-gray-700 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-700 rounded"
          />

          <button
            type="submit"
            className="w-full bg-red-600 py-3 rounded font-semibold"
          >
            Sign In
          </button>

        </form>
      </div>

    </div>
  )
}

export default Login