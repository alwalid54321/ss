import React from 'react';

    function SampleForm() {
      return (
        <div>
          <h2>Request for Sample form</h2>
          <input type="text" placeholder="Tracking #" />
          <button>Track order</button>
          <div className="form-container">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Contact Number" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Country" />
            <select>
              <option>Choose Product</option>
            </select>
            <select>
              <option>Product Variation</option>
            </select>
            <select>
              <option>Shipping Method</option>
            </select>
          </div>
        </div>
      );
    }

    export default SampleForm;
