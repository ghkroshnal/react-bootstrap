import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Assests/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/Header';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Testimonials from './components/Pages/Testimonials';
import Faq from './components/Pages/Faq';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';
import Footer from './components/common/Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path ="/services" element= {<Services />} />
          <Route path="/testimonials" element= {<Testimonials />} />
          <Route path="/faq" element= {<Faq />} />
          <Route path="/portfolio" element= {<Portfolio />} />
          <Route path="/contact" element= {<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
