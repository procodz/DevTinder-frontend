const UserCard = ({ user }) => {
  if(!user) return null;
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
        <p>{user.age},{user.gender}</p>
        <p>{user.about}</p>
        <p>Skills : {user.skills}</p>
        {/* <p>Projects : </p> */}
        <div className="card-actions justify-center my-2">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
