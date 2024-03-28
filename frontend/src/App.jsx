import { useState } from 'react'

import './App.css'
import Loginpage from './pages/Login/Loginpage'
import SignUppage from './pages/SignUp/SignUppage'
import Home from './pages/Home/Home'
function App() {
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
          {/* <Loginpage/> */}
          {/* <SignUppage/> */}
          <Home/>

      </div>
    
    </>
  )
}

export default App
