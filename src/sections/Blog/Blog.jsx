import React from 'react'
import blog1 from '../../assets/img/blog-1.png'
import blog2 from '../../assets/img/blog-2.png'
import blog3 from '../../assets/img/blog-3.png'
import blog4 from '../../assets/img/blog-4.png'
import blog5 from '../../assets/img/blog-5.png'

const Blog = () => {
  return (
    <section className="section__padding" id="blog">
      <div className="container-xxl">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-lg-8">
            <h1 className="display-4 gradient-title fw-bold lh-base text-lg-start text-center">
              A lot is happening, <br />
              We are blogging about it.
            </h1>
          </div>
        </div>
        <div className="row g-4 mt-5" height={700}>
          <div className=" col-lg-4 col-10  col-md-12 d-flex flex-column mx-lg-0  mx-auto">
            <img src={blog1} alt="" className="img-fluid" />
            <div className="bg-primary h-100 rounded-bottom d-flex flex-column justify-content-between px-4 py-3">
              <div>
                <small>Sep 26, 2021</small>
                <h5 className="mt-3">
                  GPT-3 and Open AI is the future. Let us explore how it is?
                </h5>
              </div>
              <div>
                <small>Read Full Article</small>
              </div>
            </div>
          </div>
          <div className="col-lg-8 ">
            <div className="row row-cols-1 row-cols-lg-2 g-4 justify-content-center justify-content-lg-start">
              <div className="col-lg-6 col-10 col-md-6 d-flex">
                <div className="d-flex flex-column align-items-start justify-content-around">
                  <img src={blog2} alt="" className="img-fluid" />
                  <div className="bg-primary rounded-bottom py-3 px-4">
                    <div>
                      <small>Sep 26, 2021</small>
                      <h5 className="mt-3">
                        GPT-3 and Open AI is the future. Let us exlore how it
                        is?
                      </h5>
                    </div>
                    <div>
                      <small>Read Full Article</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-10 col-md-6 d-flex  ">
                <div className="d-flex flex-column align-items-start justify-content-between">
                  <img src={blog3} alt="" className="img-fluid" />
                  <div className="bg-primary rounded-bottom py-3 px-4">
                    <div>
                      <small>Sep 26, 2021</small>
                      <h5 className="mt-2">
                        GPT-3 and Open AI is the future. Let us exlore how it
                        is?
                      </h5>
                    </div>
                    <div>
                      <small>Read Full Article</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-10 col-md-6 d-flex  ">
                <div className="d-flex flex-column align-items-start justify-content-between">
                  <img src={blog4} alt="" className="img-fluid" />
                  <div className="bg-primary rounded-bottom py-3 px-4">
                    <div>
                      <small>Sep 26, 2021</small>
                      <h5 className="mt-2">
                        GPT-3 and Open AI is the future. Let us exlore how it
                        is?
                      </h5>
                    </div>
                    <div>
                      <small>Read Full Article</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-10 col-md-6 d-flex  ">
                <div className="d-flex flex-column align-items-start justify-content-between  rounded-bottom">
                  <img src={blog5} alt="" className="img-fluid" />
                  <div className="bg-primary rounded-bottom py-3 px-4">
                    <div>
                      <small>Sep 26, 2021</small>
                      <h5 className="mt-2">
                        GPT-3 and Open AI is the future. Let us exlore how it
                        is?
                      </h5>
                    </div>
                    <div>
                      <small>Read Full Article</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
