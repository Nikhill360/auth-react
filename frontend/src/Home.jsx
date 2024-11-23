import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
        <Link to={"/dashboard"} className="mb-4 text-lg text-white font-bold bg-blue-500 hover:bg-blue-700 p-2 rounded-lg">dashboard</Link>
        <Link to={"/signup"} className="mb-4 text-lg text-white  font-bold bg-green-500 hover:bg-green-700 p-2 rounded-lg">signup</Link>
        <Link to={"/login"} className="mb-4 text-lg text-white  font-bold bg-purple-500 hover:bg-purple-700 p-2 rounded-lg">login</Link>
        <Link to={"/logout"} className="mb-4 text-lg text-white  font-bold bg-red-500 hover:bg-red-700 p-2 rounded-lg">logout</Link>
    </div>
  )
}

export default Home