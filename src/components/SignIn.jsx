import React from 'react';

    function SignIn() {
      return (
        <div>
          <h2>Sign In</h2>
          <input type="text" placeholder="Tracking #" />
          <button>Track order</button>
          <div className="form-container">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </div>
        </div>
      );
    }

    export default SignIn;
