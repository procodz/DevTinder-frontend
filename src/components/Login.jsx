import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

function Login() {
  const [emailId, setEmailId] = useState("elon@gmail.com");
  const [password, setPassword] = useState("Elon@1234");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const res = await axios.post(BASE_URL + "/login", 
      {
        emailId,
        password,
      },
      { withCredentials: true }
    );
    // console.log("Login data:", res);
    dispatch(addUser(res.data));
    navigate("/feed");
    } catch(err) {
      setError("Invalid credentials");
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center my-20">
      <div className="card bg-base-300 w-96 shadow-xl">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs py-3">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input 
                type="email" 
                value={emailId} 
                className="input input-bordered w-full max-w-xs" 
                onChange={(e) => setEmailId(e.target.value)} 
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
                value={password} 
                className="input input-bordered w-full max-w-xs" 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </label>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center py-4">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;