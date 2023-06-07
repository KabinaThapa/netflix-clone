import React from "react";
import { useState } from "react";
import Body from "./Body";
import "bootstrap/dist/css/bootstrap.min.css";
import Brandlogo from "./Netflix-Brand-Logo.png";
import { Link } from "react-router-dom";
import { AiOutlineGlobal, AiOutlineRight } from "react-icons/ai";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handledrop = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="outline">
        <div className="container">
          <nav className="navbar">
            <div className="container-fluid">
            <img
              className="navbar-brand"
              src={Brandlogo}
              width="180px"
              height="120px"
            />
            <div className="left">
            <div className="dropdown">
            <button className="btn dropdown-toggle" onClick={handledrop} type="button">
            <AiOutlineGlobal size={28}/> English
            </button>

            {isOpen ? (
              <div className="dropmenu">
                <a className="dropdown-item">English</a>
                <a className="dropdown-item">Espanol</a>
              </div>
            ) : (
              <div> </div>
            )}
          </div>
          
              
             <div className="Lsignin">
              <Link to="SignIn">Sign In</Link>
              </div>
            </div>
            </div>
          </nav>
          <div className="box1">
            <div className="container-fluid">
              <h1>Unlimited movies, TV</h1>
              <h1>shows, and more</h1>
              <p>Watch anywhere. Cancel anytime.</p>
              <div className="box1-1">
                <h3>
                  Ready to watch? Enter your email to create or restart your{" "}
                </h3>
                <h3>membership</h3>
                <div className="box1-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  ></input>
                  <button class="btn" type="button">
                    Get Started <AiOutlineRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outline2">
        <Body />
      </div>
    </>
  );
};

export default MainPage;
