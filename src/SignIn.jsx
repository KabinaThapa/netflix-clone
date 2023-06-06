import React from "react";
import Brandlogo from "./Netflix-Brand-Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
const SignIn = () => {
  return (
    <div className="outline3">
      <div className="container">
        <div className="Heading">
          <img
            className="navbar-brand"
            src={Brandlogo}
            width="200px"
            height="150px"
          />
        </div>
        <div className="SignBox">
          <div className="sign">
          <h1>Sign In</h1>
          <input
            type="text"
            class="form-control"
            placeholder="Email or Phone number"
          ></input>
          <input
            type="text"
            class="form-control"
            placeholder="Password"
          ></input>
          <button className="btn" typa="button">Sign In</button>
          <ul className="ul">
          <p>Remember me</p>
          <p>Need Help?</p>
          </ul>
          <ul className="ul2">
          <p>New to Netflix?</p> 
          <h5>Sign up now</h5>
          </ul>
          <ul className="ul">
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. 
             <a href="#"> Learn more.</a></p>
             </ul>
          </div>
        </div>
       </div>
        <div className="footer">
        <div className="container">
        <p>Questions? Call 1-844-505-2993</p>
          <div className="lbox">
            <ul className="list1">
              <li>
                {" "}
                <a href="#">FAQ</a>
              </li>
              <li>
                {" "}
                <a href="#">Privacy</a>
              </li>
              
            </ul>
            <ul className="list2">
              <li>
                {" "}
                <a href="#">Help Center</a>
              </li>
              <li>
                {" "}
                <a href="#">Cookie Preferences</a>
              </li>
             
            </ul>
            <ul className="list3">
              <li>
                {" "}
                <a href="#">Netflix Shop</a>
              </li>
              <li>
                {" "}
                <a href="#">Corporate Information</a>
              </li>
             
            </ul>
            <ul className="list4">
              <li>
                {" "}
                <a href="#">Terms of Use</a>
              </li>
              <li>
                {" "}
                <a href="#">Do Not Sell or Share My Personal Information</a>
              </li>
              
            </ul>
          </div>
          
      </div>
    </div>
    <div className="lbox-md">
            <ul className="list1">
              <li>
                {" "}
                <a href="#">FAQ</a>
              </li>
              <li>
                {" "}
                <a href="#">Privacy</a>
              </li>
              
            </ul>
            <ul className="list2">
              <li>
                {" "}
                <a href="#">Help Center</a>
              </li>
              <li>
                {" "}
                <a href="#">Cookie Preferences</a>
              </li>
             
            </ul>
            <ul className="list3">
              <li>
                {" "}
                <a href="#">Netflix Shop</a>
              </li>
              <li>
                {" "}
                <a href="#">Corporate Information</a>
              </li>
             
            </ul>
            <ul className="list4">
              <li>
                {" "}
                <a href="#">Terms of Use</a>
              </li>
              <li>
                {" "}
                <a href="#">Do Not Sell or Share My Personal Information</a>
              </li>
              
            </ul>
          </div>
          
       </div>
        
  );
};

export default SignIn;
