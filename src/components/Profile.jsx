import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((store) => store.user);
  // console.log("is user array",Array.isArray(user));
  return (
    user &&(
    <EditProfile user = {user.user} />
  )
  )
};

export default Profile