const NavBar=()=>{
    return(
        <div className="border-b-1 flex justify-around h-16 items-center">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            <button className="text-gray-700 hover:bg-blue-200 px-5 py-2 rounded-lg">Home</button>
            <div className="flex gap-5 ">
                <button className="font-semibold text-gray-700">Sign in</button>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-2xl cursor-pointer">Sing up</button>
            </div>

        </div>
    )
}
export default NavBar