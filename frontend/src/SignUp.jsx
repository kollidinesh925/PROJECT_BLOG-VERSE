const SignUp=()=>{
    return(
        <div className="flex flex-col items-center mt-10 gt-5">
            <h1 className="font-bold text-2x1 text-blue-400">JOIN BLOGVERSE</h1>
            <p className="text-gray-500 text-x1 text-center font-bold">Create Your Account And <br></br>Start Your Blogging Journey Today</p>
            <form className="flex flex-col border-1 border-black w-1/3 py-7 items-center">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input placeholder="Enter Full Name" className="border-1 border-black w-full py-2 px-1.5 rounded focus:outline-none focus:border-purple-500"></input>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input type="email" placeholder="Enter Your Email" className="border-1 border-black w-full py-2 px-1.5 rounded focus:outline-none focus:border-purple-500"></input>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type="password" placeholder="Enter Password" className="border-1 border-black w-full py-2 px-1.5 rounded focus:outline-none focus:border-purple-500"></input>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Comform Password</p>
                    <input type="password" placeholder="Re-Enter Password " className="border-1 border-black w-full py-2 px-1.5 rounded focus:outline-none focus:border-purple-500"></input>
                    <div className="flex gap-2 border-1 border-gray-800 w-[90%] p-3 items-center justify-center">
                        <input type="checkbox" className="h-5 w-5"></input>
                        <p>Agree To The Terms And conditions</p>
                    </div>
                    <button className="text-white border-1 bg-purple-500 font-semibold p=3 rounded-2xl">Create Account</button>
                    <div  className="border-[0.5px] border-gray-500 w-[90%] mt-4"></div>
                    <p className="text-gray-500 font-semibold">Already Have An Account?<span className="text-purple-500">Sign In Here</span></p>
                    <button className="hover:bg-gray-500 cursor-pointer py-4 px-3 rounded-xl w-[90%]">Back To Home</button>

                </div>
            </form>
        </div>
    )
}
export default SignUp