import React from 'react';
import company1 from  '../../Assests/images/campanies/campany-1.png';
import company2 from  '../../Assests/images/campanies/campany-2.png';
import company3 from  '../../Assests/images/campanies/campany-3.png';
import company4 from  '../../Assests/images/campanies/campany-4.png';
import company5 from  '../../Assests/images/campanies/campany-5.png';
import company6 from  '../../Assests/images/campanies/campany-6.png';


const Companies = () => {
  return (
    <section id="campanies" className="campanies">
    <div className="container">
      <div className="row text-center">
        <h4 className="fw-bold lead mb-3">Trusted by campanies like</h4>
        <div className="heading-line mb-5"></div>
      </div>
    </div>
    {/* <!-- START THE CAMPANIES CONTENT  --> */}
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src= {company1} alt="Campany 1 logo" title="Campany 1 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src= {company2} alt="Campany 2 logo" title="Campany 2 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src= {company3} alt="Campany 3 logo" title="Campany 3 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src= {company4} alt="Campany 4 logo" title="Campany 4 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src= {company5} alt="Campany 5 logo" title="Campany 5 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src= {company6} alt="Campany 6 logo" title="Campany 6 Logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Companies
