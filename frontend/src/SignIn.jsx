import React from 'react'
const SignUp = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
            <h className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-800">BlogVerse</span>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="" className="text-gray-600 hover:text-gray-800">Home</a>
                    <a href="" className="text-gray-600 hover:text-gray-800">Sign In</a>
                    <a className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</a>
                </div>
            </h>

            <from className="flex flex-1 items-center justify-center p-4">
                <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
                    <p className="text-2xl font-bold text-center mb-2">Sign In</p>
                    <p className="text-center text-gray-500 mb-6">Access your account</p>

                    <form className="space-y-5">

                        <div>
                            <div className="block text-gray-700 mb-1">Email Address</div>
                            <input type="email" placeholder="sample@gmail.com" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
                        </div>
                        <div>
                            <div className="block text-gray-700 mb-1">Password</div>
                            <input type="password" placeholder="sample123" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600"></input>
                                <p>Remember me</p>
                            </div>
                            <a href="" className="text-blue-600 hover:underline">Forgot password? </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition"> Sign In</button>
                    </form>
                    <p className="text-center text-gray-600 mt-6">
                        Don't have an account?{" "}
                        <a href="" className="text-blue-600 font-medium hover:underline"> Create one here </a>
                    </p>
                </div>
            </from>
        </div>
    )
}
export default SignIn
