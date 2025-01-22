import React from 'react';

    function QuotationForm() {
      return (
        <div>
          <h2>Request for Quotation form</h2>
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
            <input type="text" placeholder="Quantity" />
            <span>Tons</span>
            <select>
              <option>Choose the Port</option>
            </select>
            <select>
              <option>Add on Services</option>
            </select>
            <select>
              <option>Choose currency</option>
            </select>
          </div>
        </div>
      );
    }

    export default QuotationForm;
