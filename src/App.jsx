import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import MainPage from './MainPage'
import "./App.css"
import Body from './Body'
import SignIn from './SignIn'

function App() {
  return (
    <>
    
     <div className="outline">
      
          <MainPage/>
          </div>
          <div className="outline2">
          <Body/>
          </div>
          
        
    </>
  );
}

export default App;
