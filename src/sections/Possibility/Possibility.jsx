import React from 'react'
import { Cta } from '../../components'
import possibility from '../../assets/img/possibility.png'

const Possibility = () => {
  return (
    <>
      <section className="section__padding" id="possibility">
        <div className=" container-xxl">
          <div className="row align-items-center justify-content-center">
            <div className=" col-lg-7 ">
              <img src={possibility} alt="" className="img-fluid" />
            </div>
            <div className=" col-lg-5">
              <h5 className="mt-1">Request Early Access to Get Started</h5>
              <h1 className="gradient-title mt-2">
                The possibilities are beyond your imagination
              </h1>
              <p className="mt-3">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </p>

              <p className="text-secondary mt-4">
                Request Early Access to Get Started
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}

export default Possibility
