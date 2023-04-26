import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import TermsandConditions from './pages/TermsandConditions';
import AboutUs from './pages/AboutUs';
import Log from './pages/Log';
import HowitsWorks from './pages/HowitsWorks';
import ContactUs from './pages/ContactUs';
import Reviews from './pages/Reviews';
import Dashboard from './User/Dashboard';
import CalculatorHome from './User/main/CalculatorHome';
import CalenderPage from './User/main/CalenderPage';
import BudgetPlan from './User/main/BudgetPlan';
import MyPlanes from './User/main/MyPlanes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './User/main/Contact';
import Signup from './pages/Signup';


function App() {
  return (
    <div className='' >
      <Router>
      <Navbar/>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/conditions" element={<TermsandConditions />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/login" element={<Log/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/howworks" element={<HowitsWorks />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/dashboard/calculator" element={<CalculatorHome/>} />
          <Route path="/dashboard/calander" element={<CalenderPage/>} />
          <Route path="/dashboard/plan" element={<BudgetPlan/>} />
          <Route path="/dashboard/myplans" element={<MyPlanes/>} />
          <Route path="/dashboard/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>        
    </div>
  );
}

export default App;
