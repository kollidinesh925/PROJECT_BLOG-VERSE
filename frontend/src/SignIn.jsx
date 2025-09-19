const SignIn = () => {
    return (
        <div className="flex flex-col items-center mt-10 gt-5">
            <h className="font-bold text-2xl">Sign In</h>
            <p className="text-gray-500">Access Your Account</p>
            <form className="flex flex-col  w-1/4 py-7 items-center">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email Account</p>
                    <input type="email" placeholder="Enter Your Email" className="border-1 border-black w-full py-2 px-1.5 rounded focus:outline-none focus:border-purple-500"></input>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type="password" placeholder="Enter Password" className="border-1 border-black w-full py-2 px-1.5 rounded focus:outline-none focus:border-purple-500"></input>
                </div>
                <div className="flex gap-2  w-[90%] p-3 justify-between">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="h-5 w-5"></input>
                        <p>Remember me</p>
                    </div>
                    <button className=""> <a href="" alt="" className="font-semibold  text-blue-800 hover:underline ">Forgot Password? </a></button>
                </div>
                <div className="flex-justify-center rounded-2xl px-5 py-2 w-[90%]">
                    <button className="text-white border-1 bg-blue-500 h-15 font-bold rounded-2xl px-40 py-2 w-[90%]">Sign In</button>
                </div>
                <p className="text-gray-500 font-semibold">Already Have An Account?<span className="text-purple-500">Create one here</span></p>
            </form>

        </div>
    )
}
export default SignIn