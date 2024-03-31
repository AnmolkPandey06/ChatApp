import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/authcontext.jsx'

const clientId="798364514042-76irbnu36951tthhtt212dlvi1her8dm.apps.googleusercontent.com"
import { SocketContextProvider } from './context/socketcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
      <App />
      
           
      

      </SocketContextProvider>
       
    </AuthContextProvider>
   
    </BrowserRouter>
 
  </React.StrictMode>,
)
