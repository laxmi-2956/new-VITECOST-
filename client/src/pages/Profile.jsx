const Profile = () => {
  const email = localStorage.getItem("userEmail");

  return (
    <div className="page-container">
      <h2>Profile</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;