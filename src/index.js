// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingLayout from './components/Pages/LandingLayout'; 
import RoutedLayout from './components/Pages/RoutedLayout';
import Attendance from './components/Pages/Attendance';
import Mail from './components/Pages/Mail';
import Request from './components/Pages/Request';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route element={<RoutedLayout />}>
          <Route path="attendance" element={<Attendance />} />
          <Route path="mail" element={<Mail />} />
          <Route path="request" element={<Request />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
