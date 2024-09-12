import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import Data from "../Data/Data.json";

function Dropdown({ changeMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-center">
      <button
        onClick={toggleDropdown}
        className="px-4 inline-flex justify-center w-full rounded-md text-center text-white font-semibold text-5xl hover:text-violet-950 transition-all duration-200 py-10 "
      >
        <FontAwesomeIcon icon={faBars} />{" "}
      </button>

      {isOpen && (
        <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg ring-black ring-opacity-5 transition-all duration-200">
          <ul className="px-4 transition-all duration-200 ease-in-out">
            {Data.menu.map((item, index) => {
              const icon = solidIcons[item.fa];
              return (
                <li
                  key={index}
                  className={`text-4xl px-0 py-20 text-white hover:text-violet-950 cursor-pointer transform transition-transform duration-200 ease-in-out translate-y-4 opacity-0 animate-[fadeInDropDown_500ms_ease-in-out_forwards]`}
                >
                  <button>
                    {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
