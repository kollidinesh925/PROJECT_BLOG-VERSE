import { Link } from "react-router-dom"


const NavBar=()=>{
    return(
        <div className="border-b-1 flex justify-around h-16 items-center w-full">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            <Link to="/" className="text-gray-700 hover:bg-blue-200 px-5 py-2 rounded-lg">Home</Link>
            <div className="flex gap-5 items-center">
                <Link to="/SignIn" className="font-semibold text-gray-700">Sign in</Link>
                <Link to="/SignUp" className="bg-blue-600 text-white px-5 py-2 rounded-2xl cursor-pointer">Sign up</Link>
            </div>

        </div>
    )
}
export default NavBar