import React from "react";
import { useState } from "react";
import Body from "./Body"
import "bootstrap/dist/css/bootstrap.min.css";
import Brandlogo from "./Netflix-Brand-Logo.png";
import { Link } from "react-router-dom";
import {AiOutlineGlobal, AiOutlineRight} from 'react-icons'


const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handledrop = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className="outline">
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <img
            className="navbar-brand"
            src={Brandlogo}
            width="180px"
            height="120px"
          />
          <div className="left">
            <div className="dropdown1">
                <button
                  className="btn dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={handledrop}
                >
                  <AiOutlineGlobal /> English
                </button>
                
                {isOpen ? (
                  <div className="dropmenu">
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </div>
                ) : (
                  <div></div>
                )}
             </div>
              
                <Link to ="SignIn">SignIn</Link>
                
            
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
                <button class="btn btn-danger" type="button">
                  Get Statrted <AiOutlineRight/>
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
