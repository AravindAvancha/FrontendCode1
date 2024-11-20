import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../pages/BrowsingPage.css";

const BrowsingPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const services = [
    { name: "Minor Surgical Dressing", price: "₹600" },
    { name: "Intramuscular Injection", price: "₹600" },
    { name: "Vitals Checkup", price: "₹700" },
    { name: "Nebulization", price: "₹700" },
    { name: "Enema", price: "₹700" },
    { name: "IV Cannula - Insertion and / or removal", price: "₹800" },
    { name: "IV therapy per session", price: "₹800" },
    { name: "Foleys Catheter Removal and / or Insertion", price: "₹800" },
    { name: "Ryles Tube Removal and / or Insertion", price: "₹900" },
  ];

  const handleBook = (serviceName) => {
    if (serviceName === "Episodic Care") {
      navigate("/episodic-care");
    }
  };

  return (
    <div className="browsing-page">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/nursing">Nursing</Link> / Nursing by Category
      </nav>

      <div className="content">
        <div className="filter-sidebar">
          <h3>Filters</h3>
          <ul>
            <li>
              <input type="radio" name="filter" id="episodic" onClick={() => handleBook("Episodic Care")} />
              <label htmlFor="episodic">Episodic Care</label>
            </li>
            <li>
              <input type="radio" name="filter" id="continuous" />
              <label htmlFor="continuous">Continuous Care</label>
            </li>
            <li>
              <input type="radio" name="filter" id="post-transplant" />
              <label htmlFor="post-transplant">Post Transplant Care</label>
            </li>
          </ul>
        </div>

        <div className="main-content">
          <div className="sorting-bar">
            <span>Sort By:</span>
            <select>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <div className="card-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h4>{service.name}</h4>
                <p>Starts from <strong>{service.price}</strong></p>
                <button onClick={() => handleBook(service.name)}>Proceed to Book</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsingPage;
