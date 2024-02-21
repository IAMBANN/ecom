import React from 'react'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import LandingPage from "./pages/LandingPage"

const App = () => {
  const isLoggedIn = localStorage.getItem("signedin")
  console.log("is==>>", isLoggedIn)
  return (
    <div>
      <Router>
        <Routes>
        {
            isLoggedIn == "true" &&
            <Route path='/landing-page' element={ <LandingPage/> } />
        }
          <Route path='/signin' element={ <SignIn/> } />
          <Route path='/' element={ <SignUp/> } />

        </Routes>
      </Router>
    </div>
  )
}

export default App
