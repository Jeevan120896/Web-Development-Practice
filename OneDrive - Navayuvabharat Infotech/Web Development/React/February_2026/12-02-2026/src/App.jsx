import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRole, loginSuccess, loginFailed, logout } from './authSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { role, isLoggedIn, showSignup } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ userId: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      form.userId.toLowerCase() === role?.toLowerCase() &&
      form.password === '1234'
    ) {
      dispatch(loginSuccess({ user: form.userId }));
    } else {
      dispatch(loginFailed());
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="portal-container">
      {isLoggedIn ? (
        <div className="dashboard-card">
          <h1 className="portal-title">Welcome to {role} Portal</h1>
          <p className="success-text">Successfully authenticated!</p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <h1 className="portal-title">NYB Infotech</h1>
          <p className="subtitle">Please select your role to login</p>

          <div className="role-selection">
            {['Employee', 'HR', 'Admin', 'Manager'].map((r) => (
              <button
                key={r}
                className={`role-btn ${role === r ? 'active' : ''}`}
                onClick={() => dispatch(setRole(r))}
              >
                {r} Button
              </button>
            ))}
          </div>

          {role && (
            <div className="auth-card">
              {!showSignup ? (
                <form onSubmit={handleLogin}>
                  <h2 className="form-title">{role} Login</h2>
                  <div className="input-row">
                    <input
                      type="text"
                      placeholder="Enter User ID"
                      required
                      onChange={(e) =>
                        setForm({ ...form, userId: e.target.value })
                      }
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      required
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                  </div>
                  <button type="submit" className="submit-btn">
                    Login
                  </button>
                </form>
              ) : (
                <div className="signup-form">
                  <h2 className="form-title error-text">
                    Invalid Credentials!
                  </h2>
                  <p>
                    Account for <strong>{role}</strong> does not exist. Please
                    register:
                  </p>

                  <div className="signup-details">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="full-width"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="full-width"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Create Password"
                      className="full-width"
                      required
                    />

                    <button className="signup-submit-btn">
                      Sign Up
                    </button>

                    <button
                      className="back-btn"
                      onClick={() => dispatch(setRole(role))}
                    >
                      Back to Login
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
