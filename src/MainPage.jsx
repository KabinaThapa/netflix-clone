import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "bootstrap";
import Brandlogo from "./Netflix-Brand-Logo.png";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handledrop = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <img
            className="navbar-brand"
            src={Brandlogo}
            width="180px"
            height="120px"
          />
          <div className="left">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={handledrop}
                >
                  English
                </a>
                {isOpen ? (
                  <div className="dropdown-menu w-500 h-500">
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </div>
                ) : (
                  <div></div>
                )}
              </li>

              <li className="nav-link">
                <a className="Sign" href="#">
                  Sign In
                </a>
              </li>
            </ul>
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
                  Get Statrted
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
