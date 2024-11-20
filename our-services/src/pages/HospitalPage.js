import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './HospitalPage.css'; // Ensure you create and style this CSS file

const hospitals = [
  { name: 'HISAR HOSPITAL INTERCONTINONTIONAL', location: '-Hyderabad', image: 'image1.png' },
  { name: 'SA PRIAVTE HOSPITAL', location: '-Hyderabad', image: 'image2.png' },
  { name: 'DARSH HOSPITAL', location: '-Hyderabad', image: 'image3.jpg' },
  { name: 'KENCREST PRIVATE HOSPITAL', location: '-Hyderabad', image: 'image4.jpg' },
  { name: 'VARDHMAN HOSPITAL AND HEART CENTER', location: '-Hyderabad', image: 'image5.jpg' },
  { name: 'HUDSON REGIONAL HOSPITAL', location: '-Hyderabad', image: 'image6.jpg' },
  { name: 'DIVYAM HOSPITAL', location: '-Hyderabad', image: 'image8.jpeg' },
  { name: 'R.K HOSPITAL', location: '-Hyderabad', image: 'image9.jpg' },
  { name: 'ANANTHA MULTISPECIALITY HOSPITAL', location: '-Hyderabad', image: 'image10.jpg' },
];

const HospitalsPage = () => (
  <div className="hospitals-container">
      {/* Fixed Header */}
      <header className="header">
      </header>
    <h2 className="services-heading">
      <span className="orange-text">Hospital</span> <span className="blue-text">Services</span>
    </h2>
    <span className="blue-text"><p>Details about <span className="orange-text"> our </span>hospital services.</p></span>
    <div className="hospitals-grid">
      {hospitals.map((hospital, index) => (
        <div className="hospital-card" key={index}>
          <img src={`/images/${hospital.image}`} alt={hospital.name} className="hospital-image" />
          <h4 className="hospital-name">{hospital.name}</h4>
          <p className="hospital-location">{hospital.location}</p>
        </div>
      ))}
      
    </div>
    <Link to="/" className="back-button">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      {/* Fixed Footer */}
      <footer className="footer">
        <p>&copy; 2024 Hospital.All rights reserved.</p>
      </footer>
  </div>
);

export default HospitalsPage;
