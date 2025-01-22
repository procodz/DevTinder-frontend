import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      const res = await axios.post(BASE_URL + "/login", 
        {
          emailId: formData.emailId,
          password: formData.password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      localStorage.setItem('user', JSON.stringify(res.data.data || res.data));
      navigate("/feed");
    } catch(err) {
      setError("Invalid credentials");
      console.error(err);
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      await axios.post(BASE_URL + "/signup", 
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          emailId: formData.emailId,
          password: formData.password,
        }
      );
      setSuccessMessage("Signup successful! Please login with your credentials.");
      // Reset form and switch to login mode
      setFormData({
        emailId: "",
        password: "",
        firstName: "",
        lastName: ""
      });
      setIsLogin(true);
    } catch(err) {
      setError("Signup failed. Please try again.");
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center my-20">
      <div className="card bg-base-300 w-96 shadow-xl">
        <form onSubmit={isLogin ? handleLogin : handleSignup} className="card-body">
          <h2 className="card-title flex justify-center">{isLogin ? "Login" : "Sign Up"}</h2>
          
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
          
          {!isLogin && (
            <>
              <div>
                <label className="form-control w-full max-w-xs py-3">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName} 
                    className="input input-bordered w-full max-w-xs" 
                    onChange={handleInputChange}
                    required 
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs py-3">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName} 
                    className="input input-bordered w-full max-w-xs" 
                    onChange={handleInputChange}
                    required 
                  />
                </label>
              </div>
            </>
          )}

          <div>
            <label className="form-control w-full max-w-xs py-3">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input 
                type="email" 
                name="emailId"
                value={formData.emailId} 
                className="input input-bordered w-full max-w-xs" 
                onChange={handleInputChange}
                required 
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs py-3">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input 
                type="password" 
                name="password"
                value={formData.password} 
                className="input input-bordered w-full max-w-xs" 
                onChange={handleInputChange}
                required 
              />
            </label>
          </div>
          
          {error && <p className="text-red-500 text-center">{error}</p>}
          
          <div className="card-actions justify-center py-4 flex-col items-center">
            <button type="submit" className="btn btn-primary w-32">
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <button 
              type="button" 
              className="btn btn-link"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
                setSuccessMessage("");
                setFormData({
                  emailId: "",
                  password: "",
                  firstName: "",
                  lastName: ""
                });
              }}
            >
              {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;