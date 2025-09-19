import React from 'react'
const SignUp = () => {
    return (
        <div className="flex items-center flex-col mt-10 gap-5">
            <h1 className="text-5xl text-blue-600 font-bold">Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold">Create your account and <br></br>start your Blogging journey today</p>
            <form className=" flex flex-col border-1 border-gray-400 w-1/3 py-5 items-center gap-5 rounded-xl">
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input type="text" placeholder="Enter your Full Name" className="border-1 border-gray-700 w-full items-center py-2 px-1 rounded-xl focus:outline-none focus:border-purple-500" />

                </div>
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">E-mail</p>
                    <input type="email" placeholder="Enter your e-mail address" className="border-1 border-gray-700 w-full items-center py-2 px-1 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type="password" placeholder="Enter your password" className="border-1 border-gray-700 w-full items-center py-2 px-1 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <input type="password" placeholder="Confirm your password" className="border-1 border-gray-700 w-full items-center py-2 px-1 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-2 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                <button className="w-[90%] bg-purple-500 py-3 text-white font-semibold rounded-xl cursor-pointer">Create Account</button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
                <p className="text-gray-700 font-semibold">Aldready have an Account?<span className="text-purple-500 font-semibold">Sign In Here</span></p>
                <button className="text-gray-700 font-semibold py-3 w-[90%] rounded-xl cursor-pointer hover:bg-gray-200">Back to Home</button>
            </form>
        </div>
    )
}
export default SignUp