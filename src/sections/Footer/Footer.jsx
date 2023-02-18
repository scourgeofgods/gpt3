import React from 'react'
import logo from '../../assets/img/logo.png'

const Footer = () => {
  return (
    <div className="footer pt-5">
      <div className="container">
        <div className="row justify-content-center  text-center">
          <div className="col-md-12">
            <h1 className="display-4 gradient-title fw-bold lh-base my-5">
              Do you want to step in to the <br />
              future before others
            </h1>
            <a href="#" className="btn btn-outline-secondary fs-6  px-4 py-3 ">
              Request Early Access
            </a>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 justify-content-between  g-3 text-lg-start mt-5 px-5 text-center">
          <div className="col text-white">
            <img src={logo} alt="" width={72} />
            <p className="fs-6 mt-3 text-white">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="col text-white">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col text-white">
                <h5 className="text-white">Links</h5>
                <ul className="navbar-nav mt-3">
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Overons
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Social Media
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Counters
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col text-white">
                <h5 className=" text-white">Company</h5>
                <ul className="navbar-nav mt-3">
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col text-white">
            <h5>Get in touch</h5>
            <ul className="navbar-nav mt-3">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Crechterwoord K12 182 DK Alknjkcb
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  085-132567
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  info@payme.net
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center mt-5 text-center text-white">
          <div className="col-lg-6">© 2023 GPT-3. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
