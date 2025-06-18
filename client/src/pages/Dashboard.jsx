const Dashboard = () => {
  const userEmail = localStorage.getItem('userEmail');

  return (
    <div className="page-container">
      <h2>Welcome to your Dashboard</h2>
      <p>Email: {userEmail}</p>
    </div>
  );
};

export default Dashboard;