import React from 'react';

    function SignInSignUp() {
      return (
        <div>
          <h2>Sign in/ sing up</h2>
          <input type="text" placeholder="Tracking #" />
          <button>Track order</button>
          <div className="form-container">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Contac Number" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Business Type" />
            <input type="text" placeholder="Preferred Currency" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>
      );
    }

    export default SignInSignUp;
