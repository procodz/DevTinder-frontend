import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { addUser } from '../utils/userSlice';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // If no user in Redux store but we have data in localStorage
    if (!user) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          dispatch(addUser(userData));
          return;
        } catch (error) {
          console.error('Error parsing stored user data:', error);
          localStorage.removeItem('user');
        }
      }
    }
  }, [user, dispatch]);

  // Check both Redux store and localStorage
  if (!user) {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
