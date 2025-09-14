const Productcart = () =>{
    return(
        <div className="border-5 border-black w-[350px] items-center flex flex-col gap-10 py-10 rounded-2xl">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-2 border-black rounded-full" ></img>
            <div className="flex flex-col gap-5 items-center">
            <p className="font-bold text-4xl">PRODUCT 1</p>
            <p className="text-3xl text-gray-500 text-center">THIS IS A SAMPLE PRODUCT</p>
            <p className="font-bold text-4xl text-emerald-600">PRICE : 399/-</p>
            </div>
            <button className="bg-black text-white w-[90%] py-4 rounded-2xl cursor-pointer hover:bg-black">ADD TO CART</button>

        </div>
    )
}
   
export default Productcart