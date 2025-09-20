import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { CircleUser } from 'lucide-react'
import { KeyRound } from 'lucide-react'
import { Eye } from 'lucide-react'
import { EyeOff } from 'lucide-react'
import { Mail } from 'lucide-react'
import { BookUser } from 'lucide-react'

const SignUp = () => {
    const [formData, setformData] = useState({
        FullName: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""

    })
    const [errors,setErrors] = useState({
        FullName: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    })
    const [ShowPassword, setShowPassword] = useState(false)
    const [ShowConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}
        if (formData.FullName) {
            newErrors.FullName = "Enter Your Full Name"
        }
        if (formData.Email) {
            newErrors.Email = "Enter Your Email"
        }
        if (formData.Password) {
            newErrors.Password = "Enter Your Password"
        }
        if (formData.ConfirmPassword) {
            newErrors.ConfirmPassword = "Enter Your ConfirmPassword"
        } else if (formData.Password != formData.ConfirmPassword) {
            newErrors.ConfirmPassword = "Your Password Don't Match"
        }
        if (Object.keys(newErrors).length) {
            setErrors(newErrors)
        } else {
            setSuccess("Your Account Has Been Created Successfully")
            setformData({
                FullName: "",
                Email: "",
                Password: "",
                ConfirmPassword: ""
            })
        }

        // if (!formData.FullName || !formData.Email || !formData.Password || !formData.ConfirmPassword) {
        //     setError("MUST FILL THE EMPTY SPACE..!")
        // } else if (formData.Password !== formData.ConfirmPassword) {
        //     setError("GIVEN PASSWORD IS WRONG..!")
        // } else {
        //     setSuccess("YOUR ACCOUNT IS CREATED SUCCESSFULLY..")
        //     setError('')
        //     setformData({
        //         FullName: "",
        //         Email: "",
        //         Password: "",
        //         ConfirmPassword: ""
        //     })
        // }
    }


    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    const handleComfirmPassword = () => {
        setShowConfirmPassword((password) => !password)
    }
    const handlechange = (event) => {
        setError("")
        setSuccess("")
        setformData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
          setErrors((errors) => ({
            ...errors,
            [event.target.name]: ""
        }))
    }
    return (
        <div className="flex items-center flex-col gap-5">
            <NavBar />
            <h1 className="text-5xl text-blue-600 font-bold">Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold">Create your account and <br></br>start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className=" flex flex-col border-1 border-gray-400 w-1/3 py-5 items-center gap-5 rounded-xl">
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <div className='relative'>
                        <input value={formData.FullName} onChange={handlechange} name="FullName" type="text" placeholder="Enter your Full Name" className="border-1 border-gray-700 w-full items-center py-2 px-10 rounded-xl focus:outline-none focus:border-purple-500" />
                        {errors.FullName && <p>{errors.FullName}</p>}
                        <BookUser className='text-gray-400 absolute left-2 top-2' />
                    </div>
                </div>
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">E-mail</p>
                    <div className='relative'>
                        <input value={formData.Email} onChange={handlechange} name="Email" type="email" placeholder="Enter your e-mail address" className="border-1 border-gray-700 w-full items-center py-2 px-10 rounded-xl focus:outline-none focus:border-purple-500" />
                        {errors.Email && <p className='text-red-500'>{errors.Email}</p>}
                        <Mail className='text-gray-400 absolute left-2 top-2' />
                    </div>
                </div>
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <div className='relative'>
                        <input value={formData.Password} onChange={handlechange} name="Password" type={ShowPassword ? "text" : "password"} placeholder="Enter your password" className="border-1 border-gray-700 w-full items-center py-2 px-10 rounded-xl focus:outline-none focus:border-purple-500" />
                        {errors.Password && <P className="text-red-500">{errors.Password}</P>}
                        <p onClick={handlePassword}>{ShowPassword ? <EyeOff className='text-gray-400 absolute right-2 top-2' /> : <Eye className='text-gray-400 absolute right-2 top-2' />}</p>
                        <KeyRound className='text-gray-400 absolute left-2 top-2' />
                    </div >
                </div>
                <div className="w-[90%]  flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <div className='relative'>
                        <input value={formData.ConfirmPassword} onChange={handlechange} name="ConfirmPassword" d type={ShowConfirmPassword ? "text" : "password"} placeholder="Confirm your password" className="border-1 border-gray-700 w-full items-center py-2 px-10 rounded-xl focus:outline-none focus:border-purple-500" />
                        {errors.ConfirmPassword && <p className='text-red-500'>{errors.ConfirmPassword}</p>}
                        <p onClick={handleComfirmPassword}>{ShowConfirmPassword ? <EyeOff className='text-gray-400 absolute right-2 top-2' /> : <Eye className='text-gray-400 absolute right-2 top-2' />}</p>
                        <KeyRound className='text-gray-400 absolute left-2 top-2' />
                    </div>
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-2 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                {success && <p className='text-green-600'>{success}</p>}
                <button type="submit" className="w-[90%] bg-purple-500 p-3 text-white font-semibold rounded-2xl cursor-pointer flex gap-33"><CircleUser />Create Account</button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
                <p className="text-gray-700 font-semibold">Aldready have an Account?<Link to="/SignIn" className="text-purple-500 font-semibold">Sign In Here</Link></p>
                <Link to="/" className="text-gray-700 font-semibold py-3 w-[90%] rounded-xl cursor-pointer text-center hover:bg-gray-200">Back to Home</Link>
            </form>
        </div>
    )
}
export default SignUp