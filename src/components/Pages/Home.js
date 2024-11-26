import React from 'react';
import '../../Assests/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from '../Sections/Intro';
import Companies from '../Sections/Companies';
import Services from '../Sections/Services';
import Testimonials from '../Sections/Testimonials';
import FAQ from '../Sections/FAQ';
import Portfolio from '../Sections/Portfolio';
import GetStarted from '../Sections/GetStarted';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Home = () => {
  return (
    <div className="App">
      <Intro />
      <Companies />
      <Services />
      <Testimonials />
      <FAQ /> 
      <Portfolio />
      <GetStarted />         
    </div>
  )
}

export default Home
