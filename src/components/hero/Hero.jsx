import React from 'react'
import heroBg from '../../assets/img/hero.png'
import signup from '../../assets/img/Signup.png'

const Hero = () => {
  return (
    <section className="section__padding hero" id="hero">
      <div className="container-md">
        <div className="row align-items-center">
          <div className="col-lg-6 ">
            <h1 className="gradient-title fw-bold display-2 mb-3">
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p className="mb-4">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control bg-primary border-0"
                placeholder="Your email address"
              />
              <span
                className="input-group-text btn-danger btn"
                id="basic-addon2"
              >
                Get Started
              </span>
            </div>
            <img src={signup} alt="" />
          </div>
          <div className=" col-lg-6 ">
            <img src={heroBg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
