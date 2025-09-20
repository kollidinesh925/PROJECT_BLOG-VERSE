import NavBar from"./NavBar"
import SignUp from"./SignUp"
import SignIn from "./Signin"
import Home from "./Home"
import { Routes,Route } from "react-router-dom"
function App() {


  return (
    <Routes>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/SignIN" element={<SignIn/>}/>
      <Route path="/" element={<Home/>}/>
 
 
 
    </Routes>
  )
}

export default App
