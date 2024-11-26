import React from 'react';
import '../../Assests/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolio1 from '../../Assests/images/portfolio/portfolio-1.jpg';
import portfolio2 from '../../Assests/images/portfolio/portfolio-2.jpg';
import portfolio3 from '../../Assests/images/portfolio/portfolio-3.jpg';
import portfolio4 from '../../Assests/images/portfolio/portfolio-4.jpg';
import portfolio5 from '../../Assests/images/portfolio/portfolio-5.jpg';
import portfolio6 from '../../Assests/images/portfolio/portfolio-6.jpg';
import portfolio7 from '../../Assests/images/portfolio/portfolio-7.jpg';
import portfolio8 from '../../Assests/images/portfolio/portfolio-8.jpg';
import portfolio9 from '../../Assests/images/portfolio/portfolio-9.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="row text-center mt-5">
          <h1 className="display-3 fw-bold text-capitalize">Latest work</h1>
            <div className="heading-line"></div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro temporibus distinctio.
              </p>
            </div>
        {/* <!-- FILTER BUTTONS  --> */}
        <div className="row mt-5 mb-4 g-3 text-center">
          <div className="col-md-12">
            <button className="btn btn-outline-primary" type="button">All</button>
            <button className="btn btn-outline-primary" type="button">websites</button>
            <button className="btn btn-outline-primary" type="button">design</button>
            <button className="btn btn-outline-primary" type="button">mockup</button>
          </div>
        </div>

        {/* <!-- START THE PORTFOLIO ITEMS  --> */}
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img src= {portfolio1} alt="" title="portfolio 1 picture"
                className="img-fluid" />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>project name goes here 1</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img src= {portfolio2} alt="" title="portfolio 2 picture"
                className="img-fluid" />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>project name goes here 2</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img src= {portfolio3} alt="" title="portfolio 3 picture"
                className="img-fluid" />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>project name goes here 3</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img src= {portfolio4} alt="" title="portfolio 4 picture"
                className="img-fluid" />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>project name goes here 4</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img src= {portfolio5} alt="" title="portfolio 5 picture"
                className="img-fluid" />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>project name goes here 5</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img src= {portfolio6} alt="" title="portfolio 6 picture"
                className="img-fluid" />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>project name goes here 6</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img src= {portfolio7} alt="" title="portfolio 7 picture"
                className="img-fluid" />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>project name goes here 7</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img src= {portfolio8} alt="" title="portfolio 8 picture"
                className="img-fluid" />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>project name goes here 8</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img src= {portfolio9} alt="" title="portfolio 9 picture"
                className="img-fluid" />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>project name goes here 9</h4>
                  <p>category project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Portfolio
