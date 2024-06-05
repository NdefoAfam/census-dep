import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Attendance from './components/Pages/Attendance';
import Mail from './components/Pages/Mail';
import Request from './components/Pages/Request';
import LandingLayout from './components/Pages/LandingLayout'; 
import FormComponent from './FormComponent';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route path="attendance" element={<Attendance />} />
        <Route path="request" element={<Request />} />
        <Route path="mail" element={<Mail />} />
      </Route>
    </Routes>
  );
}

export default App;
