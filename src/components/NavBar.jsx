import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';
// import logoutHandler from './Logout';



const NavBar = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async() =>{
  
    try {
      await axios.post(BASE_URL + "/logout", {}, 
        { withCredentials: true }
      );
      dispatch(removeUser());
      return  navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
};


  return (
    <div>
      <div className="navbar bg-neutral">
        <div className="flex-1">
          <Link to = "/feed" className="btn btn-ghost text-xl">DevConnect</Link>
        </div>
        {user &&<div className="flex-none gap-2">
          <div className='form-control mx-3'>Welcome, {user.firstName}</div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user photo"
                  src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile"  className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to = "/user/connections">Connections</Link></li>
              <li><Link to = "/user/request/received">Requests</Link></li>
              <li><a onClick={logoutHandler}>Logout</a></li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default NavBar