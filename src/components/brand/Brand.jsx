import React from 'react'
import brand1 from '/src/assets/img/dropbox.png'
import brand2 from '/src/assets/img/google.png'
import brand3 from '/src/assets/img/shopify.png'
import brand4 from '/src/assets/img/slack.png'
import brand5 from '/src/assets/img/Bitmap.png'

const Brand = () => {
  return (
    <section id="brand" className="brand pt-5">
      <div className="container">
        <div className="row g-lg-5 g-4 d-flex align-items-center text-lg-start mt-5 gap-3 text-center">
          <div className="col">
            <img src={brand1} alt="" width={120} />
          </div>
          <div className="col">
            <img src={brand2} alt="" width={120} c />
          </div>
          <div className="col">
            <img src={brand3} alt="" width={120} />
          </div>
          <div className="col">
            <img src={brand4} alt="" width={120} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
