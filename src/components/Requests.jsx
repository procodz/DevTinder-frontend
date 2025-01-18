import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/receivedRequest"; // Adjust the import path as needed
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const PendingRequests = () => {
  const requests = useSelector((store) => store.request) || [];
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchRequests = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await axios.get(BASE_URL + '/user/request/received', {
        withCredentials: true
      });
      dispatch(addRequest(res?.data?.data));
    } catch (error) {
      console.error('Failed to fetch requests:', error);
      setError("Failed to load requests. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleAccept = async (requestId) => {
    try {
      // Implement your accept logic here
      console.log("Accepting request:", requestId);
      // After successful acceptance, refresh the requests
      await fetchRequests();
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const handleReject = async (requestId) => {
    try {
      // Implement your reject logic here
      console.log("Rejecting request:", requestId);
      // After successful rejection, refresh the requests
      await fetchRequests();
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <h1 className="text-3xl font-bold mb-8">Pending Requests</h1>
      <div className="w-full max-w-4xl px-4">
        {requests.length === 0 ? (
          <div className="text-center p-8">
            <p className="text-lg">No pending requests.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {requests.map((request) => (
              <div 
                key={request._id}
                className="card lg:card-side bg-base-100 shadow-xl"
              >
                <figure className="w-48 h-48">
                  <img
                    src={request.fromUserId.photoUrl} // Use actual photo URL when available
                    alt={`${request.fromUserId.firstName} ${request.fromUserId.lastName}`}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">
                    {`${request.fromUserId.firstName} ${request.fromUserId.lastName}`}
                  </h2>
                  <p className="text-base-content/70">Status: {request.status}</p>
                  <div className="card-actions justify-end mt-4">
                    <button 
                      className="btn btn-error"
                      onClick={() => handleReject(request._id)}
                    >
                      Reject
                    </button>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleAccept(request._id)}
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingRequests;