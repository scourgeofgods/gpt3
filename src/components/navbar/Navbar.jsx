import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a to="#" className="navbar-brand">
          <img src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler collapsed">
          {toggleMenu ? (
            <RiCloseLine
              className="icon"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line className="icon" onClick={() => setToggleMenu(true)} />
          )}
        </button>
        <div
          className={
            toggleMenu
              ? 'navbar-collapse show scale-up-center collapse'
              : 'navbar-collapse collapse'
          }
        >
          <ul className="navbar-nav custom-navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                What is GPT?
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Open AI
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Case Studies
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link">
                Library
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center ms-auto">
            <a href="#!" className="btn btn-light border-0">
              Sign in
            </a>
            <a href="#!" className="btn btn-danger">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
