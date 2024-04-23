import openMenu from "../assets/open_menu.svg";
import closeMenu from "../assets/close_menu.svg";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="pb-4 container d-flex justify-content-between align-items-end">
      <div className="logo text-nowrap px-3 pb-2 pt-lg-6 pt-5 pe-lg-8 pe-8 fs-3 text-white bg-dark fw-bold">
        Tzuru Chen
      </div>

      <button
        className="menu-btn mb-2 me-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Navigation Menu"
      >
        <img src={isOpen ? closeMenu : openMenu} alt="menu icon" />
      </button>
      <nav className={`nav ${isOpen ? "open" : ""}  pb-lg-2`}>
        <ul className="m-lg-0 p-lg-0 list-unstyled d-block d-lg-inline-block">
          <li>
            <a
              className="py-2 px-4 px-lg-0 fs-5 fw-bold  d-block d-lg-inline-block"
              href="#about"
            >
              個人簡介
            </a>
          </li>
          <li>
            <a
              className="py-2 px-4 px-lg-0 fs-5 fw-bold  d-block d-lg-inline-block"
              href="#projects"
            >
              代表作品
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
