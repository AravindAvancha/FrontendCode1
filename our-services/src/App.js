import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HospitalsPage from './pages/HospitalPage'; // Your HospitalsPage component
import HomePage from './pages/HomePage'; // Your HomePage component
import AmbulancePage from './pages/AmbulancePage';
import './App.css';
import MedicalStorePage from './pages/MedicalStorePage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import NursingPage from './pages/NursingPage';
import ThankYouPage from './pages/ThankYouPage';
import BrowsingPage from './pages/BrowsingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Home Page */}
        <Route path="/hospitals" element={<HospitalsPage />} />  {/* Hospitals Page */}
        <Route path="/ambulance" element={<AmbulancePage />} /> 
        <Route path="/medical-store" element={<MedicalStorePage />} /> 
        <Route path="/nursing" element={<NursingPage/>} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/nursing/nursing-by-category/:category" element={<BrowsingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
