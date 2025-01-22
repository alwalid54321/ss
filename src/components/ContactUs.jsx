import React from 'react';

    function ContactUs() {
      return (
        <div>
          <h2>Contact Us</h2>
          <input type="text" placeholder="Tracking #" />
          <button>Track order</button>
          <div className="form-container">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Contact Number" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Country" />
            <textarea placeholder="Your Message"></textarea>
          </div>
          <div>
            <h3>Our location</h3>
            <div style={{ width: '100%', height: '300px', backgroundColor: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span>Map Placeholder</span>
            </div>
          </div>
          <div>
            <h3>Contact Numbers</h3>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Address" />
          </div>
        </div>
      );
    }

    export default ContactUs;
