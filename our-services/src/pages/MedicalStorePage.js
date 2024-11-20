import React from 'react';
import './MedicalStorePage.css';
import { useNavigate } from 'react-router-dom';

const MedicalStorePage = () => {
  const navigate = useNavigate();

  const medicalItems = [
    {
      id: 1,
      name: "Apollo 24/7",
      description: "Apollo 24/7 offers round-the-clock online doctor consultations and healthcare services.",
      imageUrl: "https://th.bing.com/th/id/OIP.HbyWOm-5IFYdkP1sxoEHnQHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      link: "https://www.apollo247.com/"
    },
    {
      id: 2,
      name: "Pharma Essentia",
      description: "Pharma Essentia - Trusted Medications",
      imageUrl: "https://us.pharmaessentia.com/wp-content/uploads/2020/08/pharma-essentia-logo.png",
      link: "https://us.pharmaessentia.com/",
    },
    {
      "id": 3,
      "name": "Netmeds",
      "description": "Your trusted online pharmacy for medicines and healthcare essentials.",
      "imageUrl": "https://th.bing.com/th/id/OIP._w_F3ptuDe2GgHr-thIa4AHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "link": "https://www.netmeds.com/"
    },
    
      {
        "id": 4,
        "name": "PharmaEasy",
        "description": "Convenient online healthcare and medicine delivery platform.",
        "imageUrl": "https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0",
        "link": "https://pharmeasy.in/"
      },
      {
        "id": 5,
        "name": "TATA 1mg",
        "description": "Trusted healthcare platform for medicines, lab tests, and consultations.",
        "imageUrl": "https://www.1mg.com/images/tata_1mg_logo.svg",
        "link": "https://www.1mg.com/"
            
      },
      {
        "id": 6,
        "name": "MedPlusMart",
        "description": "One-stop shop for medicines, health products, and wellness essentials.",
        "imageUrl": "https://ik.imagekit.io/c1suzwh62ew/images/store/medplusmart-coupon-promo-code.png",
        "link": "https://www.medplusmart.com/"
      }
      
    
  ];

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="medical-store-page">
      {/* Fixed Header */}
      <header className="header">
      </header>
      
      <center>
        <h2 className="heading">
          <span className="highlight-text">Medical-Store</span> <span className="sub-text">Services</span>
        </h2>
        <p className="description-text">
          <span className="sub-text">
            Details about <span className="highlight-text">our</span> medical-store services.
            <br />Explore our collection of medical supplies and health essentials.
          </span>
        </p>
      </center>
      
      <div className="product-container">
        <div className="item-grid">
          {medicalItems.map((item) => (
            <div key={item.id} className="item-card">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">
               <img src={item.imageUrl} alt={item.name} className="item-image" />
              <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <button onClick={handleBackClick} className="back-button">
        <i className="bi bi-arrow-left"></i> Back
      </button>

      {/* Fixed Footer */}
      <footer className="footer">
        <p>&copy; 2024 Medical Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MedicalStorePage;
