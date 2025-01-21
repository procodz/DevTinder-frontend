import React, { useState } from 'react';
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

const Profile = () => {
  const userState = useSelector((store) => store.user);
  // Extract user data from the nested structure
  const user = userState?.user?.user || userState;
  const [localUser, setLocalUser] = useState(user || {});

  // Function to handle form changes
  const handleFormChange = (updatedUser) => {
    setLocalUser(updatedUser);
  };

  // Only render if user exists
  return (
    user && (
      <div className="flex justify-around items-start">
        <EditProfile 
          user={user} 
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