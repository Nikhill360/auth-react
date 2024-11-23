import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <h1 className="text-3xl font-semibold text-purple-500">Welcome to Dashboard</h1>
      <Link to={"/"} className="mt-4 text-lg text-green-500 hover:text-green-700">Home</Link>
    </div>
  )
}

export default Dashboard