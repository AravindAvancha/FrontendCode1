import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ThankYouPage.css";

const ThankYouPage = () => {
  const location = useLocation();
  const { patientName, patientAge, patientMobile, patientAddress } =
    location.state || {};

  return (
    <div className="thank-you-container">
        {/* Fixed Header */}
      <header className="header">
      </header>
      <h2 className="thank-you-heading">Thank You for Choosing an Ambulance Service!</h2>
      <h3>
        <p className="blue-text1">Your ambulance has been booked successfully.</p>
      </h3>
      <h4 className="blue-text"><strong><u>Patient Details:</u></strong></h4>
      <div className="patient-details">
        <div className="detail-row">
          <span className="detail-label">Name:</span>
          <span className="detail-value">{patientName}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Age:</span>
          <span className="detail-value">{patientAge}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Mobile:</span>
          <span className="detail-value">{patientMobile}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Address:</span>
          <span className="detail-value">{patientAddress}</span>
        </div>
      </div>
      <Link to="/" className="back-to-home-btn">Back</Link>
      {/* Fixed Footer */}
    <footer className="footer">
        <p>&copy; 2024.All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ThankYouPage;
