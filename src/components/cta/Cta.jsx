import React from 'react'

const Cta = () => {
  return (
    <section className="p-2">
      <div className="container">
        <div className="row align-items-center grad-bg rounded-3 px-4 py-5">
          <div className="col-lg-9 text-lg-start text-center">
            <p>Request Early Access to Get Started</p>
            <h4 className="text-dark mb-4">
              Register today & start exploring the endless possiblities.
            </h4>
          </div>
          <div className="col-lg-3 text-lg-end text-center">
            <button className="btn btn-dark rounded-pill ">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
