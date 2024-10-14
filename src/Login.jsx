import axios from 'axios';
import React, { useState } from 'react'

function Login() {
  const [emailId, setEmailId] = useState("elon@gmail.com");
  const [password, setPassword] = useState("Elon@1234");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", 
      {
      emailId, password,
    },
    {withCredentials: true}
  );
  }catch(err){
      console.error(err);
    }
  }
  return (
    <div className="flex justify-center my-20">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs py-3">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setEmailId(e.target.value)} />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs py-3">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setPassword(e.target.value)}/>
            </label>
          </div>
          <div className="card-actions justify-center py-4">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div></div>
  )
}

export default Login