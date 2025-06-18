import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch(() => alert("Failed to fetch orders"));
  }, []);

  return (
    <div className="page-container">
      <h2>Your Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order.productName} - ₹{order.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Orders;
