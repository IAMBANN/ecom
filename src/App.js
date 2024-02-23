import React from 'react'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import LandingPage from "./pages/LandingPage"
import LoginForm from './pages/Login'

const App = () => {
  const isLoggedIn = localStorage.getItem("signedin")
  return (
    <div>
      <Router>
        <Routes>
        {
            isLoggedIn == "true" &&
            <Route path='/landing-page' element={ <LandingPage/> } />
        }
          <Route path='/signin' element={ <SignIn/> } />
          <Route path='/login' element={ <LoginForm/> } />
          <Route path='/' element={ <SignUp/> } />

        </Routes>
      </Router>
    </div>
  )
}

export default App
