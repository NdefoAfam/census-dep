import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Card from '../Card'; // Ensure the Card component path is correct
import '../../App.css'; // Adjust the path to App.css based on its location

const LandingLayout = () => { // Renamed the component to LandingLayout
  return (
    <div className="App">
      <header className="App-header">
        <h1>CENSUS DEPARTMENT</h1>
      </header>
      <main>
        <div className="title-container">
          <h2 style={{ color: 'black' }}>Tracking Management System</h2>
          <h3 style={{ color: 'black', fontSize: '25px', fontWeight: 200, margin: '0 2rem' }}>
            Departmental Management System for Official tracking and processing of staff attendance, visitors request
            management and mail tracking
          </h3>
        </div>

        <div className="card-container">
          <Link to="/attendance">
            <Card 
              imgSrc="/assets/attendance.jpg" 
              altText="Attendance Management"
              title="Attendance Management"
              address="258 Serenity Lane, Crestwood Hills"
              content="This is the content of the first card. It can be a brief description or any information you want to highlight."
            />
          </Link>
          <Link to="/request">
            <Card 
              imgSrc="/assets/requestcard.jpg" 
              altText="Request Management"
              title="Request Management"
              address="258 Serenity Lane, Crestwood Hills"
              content="This is the content of the first card. It can be a brief description or any information you want to highlight."
            />
          </Link>
          <Link to="/mail">
            <Card 
              imgSrc="/assets/mail.jpg" 
              altText="Mails Management"
              title="Mails Management"
              address="258 Serenity Lane, Crestwood Hills"
              content="This is the content of the first card. It can be a brief description or any information you want to highlight."
            />
          </Link>
        </div>

        <Outlet />  {/* This is where the routed components will be rendered */}
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Census Department. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><Link to ="/Mail">Mail</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout; // Export the component
