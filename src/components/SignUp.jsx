import React from 'react';

    function SignUp() {
      return (
        <div>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Tracking #" />
          <button>Track order</button>
          <div className="form-container">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Contact Number" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Business Type" />
            <input type="text" placeholder="Preferred Currency" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
          </div>
        </div>
      );
    }

    export default SignUp;
