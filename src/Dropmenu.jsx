import React from "react";
import { useState } from "react";

const Dropmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handledrop = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="dropdown ">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="False"
          onClick={handledrop}
        >
          English
        </button>
        {isOpen ? (
          <div class="dropdownBox d-flex m-0">
            <ul>
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </div>
        ) : (
          <div> </div>
        )}
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default Dropmenu;
