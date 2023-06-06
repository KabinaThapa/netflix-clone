import React from "react";
import Brandlogo from "./Netflix-Brand-Logo.png";
import { Route,Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./MainPage";
import "./App.css";
import Body from "./Body";
import SignIn from "./SignIn";

function App() {
  
    
  
  return (
    <>
    <Routes>
      <Route index element={<MainPage/>} />
      <Route path ="SignIn" element={<SignIn />} />
     
      </Routes>
     
    
    </>
  );
}

export default App;
