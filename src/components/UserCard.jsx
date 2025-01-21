import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUserFromFeed } from "../utils/feedslice";

const UserCard = ({ user }) => {
  if(!user) return null;
  const dispatch = useDispatch();
  const userId = user._id;
  // console.log(userId);
  const handleSendRequest = async(status, userId) => {
    try {
      const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, 
        {}, 
        {withCredentials: true}
      );
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.log(error);
    }
  }; 
  return (
    <div className="card bg-base-300 w-96 shadow-xl my-10 mx-auto"> 
      <figure>
        <img
          src= {user.photoUrl}
          alt="photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
        {/* <p>{user.age},{user.gender}</p> */}
        <p>{user.about}</p>
        {/* <p>Projects : </p> */}
        <div className="card-actions justify-center my-2">
          <button className="btn btn-danger bg-red-600" onClick={() => handleSendRequest("ignored", userId)}>Ignore</button>
          <button className="btn btn-success bg-green-600" onClick={() => handleSendRequest("interested", userId)}>Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
