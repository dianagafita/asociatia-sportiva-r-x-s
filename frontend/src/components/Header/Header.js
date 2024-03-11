import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../logo.jpg";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if (showMobileMenu && window.innerWidth >= 640) {
        setShowMobileMenu(false);
      }
      if (showMobileMenu && window.innerWidth <= 640) {
        setShowDropDown(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [showMobileMenu, showDropDown]);

  const dropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <>
      <div className="header-container">
        <div className={`backdrop ${showMobileMenu ? "open" : ""}`}></div>
        <header className="header">
          <div className="image">
            <a href="/">
              <img src={logo} alt="site_logo" />
            </a>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <a href="/detalii">Detalii</a>
              </li>
              <li>
                <a href="/antrenori">Antrenori</a>
              </li>
              <li>
                <a href="/evenimente">Evenimente</a>
              </li>
            </ul>
          </nav>
          <button onClick={handleMobileMenu}>
            <IoMenu />
          </button>
        </header>
      </div>

      <nav className={showMobileMenu ? "mobile-nav open" : "mobile-nav"}>
        <ul className="mobile_nav-items">
          <li>
            <a href="/detalii">Detalii</a>
          </li>
          <li>
            <a href="/antrenori">Antrenori</a>
          </li>
          <li>
            <a href="/evenimente">Evenimente</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
