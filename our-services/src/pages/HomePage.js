// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const services = [
  { title: 'Ambulance', path: '/ambulance', image: `${process.env.PUBLIC_URL}/ambulance.png` },
  { title: 'Medical Store', path: '/medical-store', image: `${process.env.PUBLIC_URL}/medical-store.png` },
  { title: 'Hospitals', path: '/hospitals', image: `${process.env.PUBLIC_URL}/hospital.png` },
  { title: 'Nursing', path: '/nursing', image: `${process.env.PUBLIC_URL}/nursing.png` },
  { title: 'Home Care', path: '/home-care', image: `${process.env.PUBLIC_URL}/home-care.png` },
];

const HomePage = () => (
  <div className="home-container">
      {/* Fixed Header */}
      <header className="header">
      </header>
    <h2 className="services-heading">
      <span className="orange-text">Our</span> <span className="blue-text">Services</span>
    </h2>
    <div className="text-container">
      <p className="inline-text">
        At our healthcare facility, we are committed to providing comprehensive medical services that cater to the diverse needs of our patients. 
        Our skilled team of healthcare professionals offers specialized care in a wide range of fields, from primary and preventive care to advanced, 
        specialized treatments.<br></br>
        Additionally, our emergency services are available 24/7 to address urgent medical situations promptly and efficiently.
      </p>
    </div>
    <div className="services-grid">
      {services.map((service, index) => (
        <Link to={service.path} className="service-card" key={index}>
          <div className="service-image-circle">
            <img src={service.image} alt={service.title} className="service-image" />
          </div>
          <h4 className="service-title">{service.title}</h4>
        </Link>
      ))}
    </div>
    {/* Fixed Footer */}
    <footer className="footer">
        <p>&copy; 2024 Our Services.All rights reserved.</p>
      </footer>
  </div>
);

export default HomePage;
