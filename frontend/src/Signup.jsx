import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()

    const [SignupData, setSignupData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handelChange = (e) => {
         setSignupData({ ...SignupData, [e.target.name]: e.target.value }) 
        a}

    const sendSignupData = (e) => {
        e.preventDefault()
        try {
            axios.post("http://localhost:5050/signup", SignupData, { withCredentials: true })
            navigate("/login")
        } catch (err) {
            consol.log(err)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
            <h1 className="text-4xl font-bold text-purple-500 mb-4">Create Your Account</h1>
            <form onSubmit={sendSignupData} className="mt-4 flex flex-col space-y-4" action="">
                <input onChange={handelChange} name='username' className="p-2 border border-gray-400 rounded-lg bg-gray-700 text-white" type="text" placeholder='Username' />
                <input onChange={handelChange} name='email' className="p-2 border border-gray-400 rounded-lg bg-gray-700 text-white" type="email" placeholder='Email' />
                <input onChange={handelChange} name='password' className="p-2 border border-gray-400 rounded-lg bg-gray-700 text-white" type="password" placeholder='Password' />
                <button className="p-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700" type='submit'>Sign Up</button>
            </form>
            <Link to={"/"} className="mt-4 text-lg text-blue-500 hover:text-blue-700 font-semibold">Back to Home</Link>
        </div>
    )
}

export default Signup