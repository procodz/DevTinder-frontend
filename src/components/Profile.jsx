// import React from 'react'
// import EditProfile from './EditProfile'
// import { useSelector } from 'react-redux';
// import UserCard from './UserCard';

// const Profile = () => {
//   const user = useSelector((store) => store.user);
//   // console.log("is user array",Array.isArray(user));
//   return (
//     user &&(
//     <EditProfile user = {user.user} />
//   )
  
//   )
// };


import React, { useState } from 'react';
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

const Profile = () => {
  const user = useSelector((store) => store.user);
  // Initialize localUser state only when user data is available
  const [localUser, setLocalUser] = useState(user ? user[0] : {});

  // Function to handle form changes
  const handleFormChange = (updatedUser) => {
    setLocalUser(updatedUser);
  };

  // Only render if user exists and has data
  return (
    user && user.length > 0 && (
      <div className="flex justify-around items-start">
        <EditProfile 
          user={user[0]} 
          onFormChange={handleFormChange}
        />
        <div className="mt-10">
          <UserCard user={localUser} />
        </div>
      </div>
    )
  );
};

export default Profile;