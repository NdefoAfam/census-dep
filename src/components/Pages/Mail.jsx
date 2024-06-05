import React, { useState } from 'react';
import './mail.css';

const Mail = () => {
  const [formData, setFormData] = useState({
    referenceId: '',
    department: '',
    receiptDate: '',
    category: '',
    sender: '',
    request: '',
    mailDate: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2></h2>
      <form onSubmit={handleSubmit} style={{}}>
        <div className="hero-image">
          <img
            src="https://i.pinimg.com/736x/25/47/e4/2547e41487634d272a78471c0ae64121.jpg"
            alt="Hero"
            style={{ marginTop: '' }}
          />
        </div>
        <br />
        <div className="form-group fullname">
          <label>Reference ID</label>
          <input
            type="text"
            name="referenceId"
            placeholder="Enter issue no. of issuing dept."
            value={formData.referenceId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group posting">
          <label>DEPARTMENT</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="" disabled>Select Department</option>
            <option value="Office of The Chairman">Office of The Chairman</option>
            <option value="Male">Office of The Chairman</option>
          <option value="Male">Office of The DG</option>
          <option value="Female">Cartography Department</option>
          <option value="Male">Population Management</option>
          <option value="Female">General Services</option>
          <option value="Male">Procurement</option>
          <option value="Female">Secretary to the Commission</option>
          <option value="Female">
            Human Resource Management and Administration
          </option>
          <option value="Male">Public Relations Department</option>
          <option value="Female">Vital Registration Department</option>
          <option value="Male">Legal Department</option>
          <option value="Female">
            Population Institute and Studies Department
          </option>
          <option value="Male">Public Administration Department</option>
          <option value="Female">Account Department</option>
          <option value="Male">ICT Department</option>
          <option value="Female">Special Duties Department</option>
          <option value="Female">Other</option>
          </select>
        </div>
        <div className="form-group fullname">
          <label>DATE OF RECEIPT</label>
          <input
            type="text"
            name="receiptDate"
            placeholder="Enter date of receipt"
            value={formData.receiptDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group posting">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" disabled>Select Category</option>
            <option value="Incoming">Incoming</option>
            <option value="Outgoing">Outgoing</option>
          </select>
        </div>
        <div className="form-group fullname">
          <label>WHO FROM</label>
          <input
            type="text"
            name="sender"
            placeholder="Enter who mail is coming from"
            value={formData.sender}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userRequest">Explain your request:</label>
          <textarea
            id="userRequest"
            value={formData.userRequest}
            onChange={handleChange}
            placeholder="Enter your request here"
          ></textarea>
        </div>
        <div className="form-group date">
          <label>Mail Date</label>
          <input
            type="date"
            name="mailDate"
            value={formData.mailDate}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group time">
          <label>Time</label>
          <input
            type="text"
            name="time"
            placeholder="Current time"
            value={formData.time}
            onChange={handleChange}
            disabled
          />
        </div>
        <br />
        <div className="form-group submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Mail;
