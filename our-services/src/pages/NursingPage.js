import React from "react";
import "./NursingPage.css";
import { Link } from "react-router-dom";

const NursingPage = () => (
  <div>
    {/* Fixed Header */}
    <header className="header"></header>

    <center>
      <h2 className="services-heading">
        <span className="orange-text">Nursing</span>{" "}
        <span className="blue-text">Services</span>
      </h2>
      <p>
        <span className="blue-text">
          Details about <span className="orange-text"> our </span>nursing
          services.
          <br />
          NURSING SUPPORT FROM THE COMFORT OF YOUR HOME
        </span>
      </p>

      {/* Image Section */}
      <div className="image-gallery">
        <div>
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/128/3695/3695975.png"
            alt="Nurse 1"
            className="nursing-image"
          />
          <h1 className="nursing-text">
            Trained &<br></br> experienced Staff
          </h1>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/17643/17643658.png"
            alt="Nurse 2"
            className="nursing-image"
          />
          <h1 className="nursing-text">
            Personalized<br></br> Care
          </h1>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/5897/5897458.png"
            alt="Nurse 3"
            className="nursing-image"
          />
          <h1 className="nursing-text">
            Daily<br></br> Health Monitoring
          </h1>
        </div>
      </div>
      <center>
        <h2 className="title">Nursing by Category</h2>
      </center>
      {/* Card Section */}
      <div className="card-container">
        <Link to="/nursing/nursing-by-category/episodic-care" className="card">
          <div className="card-image-container">
            <img
              src="https://cphateststorage.s3.ap-south-1.amazonaws.com/web-images-new/nursing/episodic_care.svg"
              alt="Episodic Care"
              className="card-image"
            />
          </div>
          <h3 className="card-title">Episodic Care</h3>
        </Link>
        <Link to="" className="card">
          <div className="card-image-container">
            <img
              src="https://cphateststorage.s3.ap-south-1.amazonaws.com/web-images-new/home-page/popular_offerings/doctor-at-home.svg"
              alt="Continuous Care"
              className="card-image"
            />
          </div>
          <h3 className="card-title">Continuous Care</h3>
        </Link>
        <Link to="" className="card">
          <div className="card-image-container">
            <img
              src="https://cphateststorage.s3.ap-south-1.amazonaws.com/web-images-new/nursing/episodic_care.svg"
              alt="Post Transplant Care"
              className="card-image"
            />
          </div>
          <h3 className="card-title">Post Transplant Care</h3>
        </Link>
      </div>
    </center>
    {/* About Nursing Section */}
    <div className="about-nursing-container">
      <div className="about-nursing">
        <h3 className="about-title">About Nursing</h3>
        <p className="about-description">
          Nursing care refers to healthcare services provided by General Nursing
          and Midwifery (GNM) or a BSc Nursing nurse. These professionals work
          in various settings, including private residences, hospitals, nursing
          homes, rehabilitation centers, and hospice care facilities.
        </p>
        <p className="about-description">
          This type of care is designed to meet the medical needs of individuals
          who require skilled nursing services<br></br>
          <i class="bi bi-diamond-fill small-icon"></i>&nbsp; where they like
          these services at the convenience of their own homes rather than in a
          hospital <br></br>
          <i class="bi bi-diamond-fill small-icon"></i>&nbsp; nursing facility
          or within a center wherein there is a requirement of continuous
          patient monitoring.
        </p>
        <p className="about-description">
          MaharajuHealthCare provides two types of Nursing Care Services:
        </p>
        <ul className="about-list">
          <li>
            <strong
              style={{
                color: "blueviolet",
                fontFamily: "Verdana, sans-serif",
              }}
            >
              Transactional Care
            </strong>
            &nbsp;&nbsp; :– Intramuscular Injections (IM), Intravenous infusion
            (IV), Subcutaneous injections, Wound dressing (Basic), Nebulization,
            Vitals check, etc.
          </li>
          <li>
            <strong
              style={{
                color: "blueviolet",
                fontFamily: "Verdana, sans-serif",
              }}
            >
              Continuous Care
            </strong>
            &nbsp;&nbsp; :– Tracheostomy care, Ostomy Care, RT feeds, PEG
            feeding, Foley’s catheter care, Non-Invasive Oxygen Therapy (NIOT) –
            CPap, BiPap, Oxygen Concentrator, Ventilator monitoring, Central
            line care, DVT pump, Wound dressing (Post Surgery), Vascular wounds,
            Diabetes wound, etc.
          </li>
        </ul>
        <p className="about-description">
          MaharajuHealthCare provides Nursing Care services on a transactional
          and continuous basis. Transactional service starts from INR 500 per
          visit. Continuous services include daily, weekly, and monthly, either
          12hrs or 24hrs. The 12hr service starts from INR 2,300, and the 24hrs
          service starts from INR 3,000 per day and can vary depending on the
          complexity of the patient need and experience of the nurse assigned.
        </p>
        <p className="about-note">
          <strong style={{ color: "red" }}>Note:</strong>
          <br />
          <i class="bi bi-diamond-fill small-icon"></i> The actual price may
          vary depending upon the type of service chosen.
          <br />
          <i class="bi bi-diamond-fill small-icon"></i> Services are currently
          available in Hyderabad only.
        </p>
      </div>
      <div className="about-image-container">
        <img
          src="https://www.callhealth.com/assets/images/nursing.svg"
          alt="Nursing Care"
          className="about-image"
        />
      </div>
    </div>

    <Link to="/" className="back-button1">
      <i className="bi bi-arrow-left"></i> Back
    </Link>

    {/* Fixed Footer */}
    <footer className="footer">
      <p>&copy; 2024 Nursing. All rights reserved.</p>
    </footer>
  </div>
);

export default NursingPage;
