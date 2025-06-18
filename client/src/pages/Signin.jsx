import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

import axios from "axios";
import { useDispatch } from "react-redux";
import { signinError, signinStart, signinSuccess } from "../redux/auth/authslice";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleLogin = async () => {
  //   dispatch(signinStart());
  //   if (!email || !password) {
  //     alert("Please enter both email and password");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "https://vitecost-project-2.onrender.com/api/user/signin",
  //       {
  //         email,
  //         password,
  //       },
  //       {
  //         withCredentials: true,
  //       }
  //     );  

  //     console.log("Login response:", response.data);  
  //     console.log(response);

  //     dispatch(signinSuccess({ user: response.data.user, message: response.data.message }));
  //     navigate("/");
  //   } catch (error) {
  //     dispatch(
  //       signinError(error?.response?.data?.message || "Something went wrong")
  //     );
  //     console.error("Login error:", error.response || error.message);
  //     alert(
  //       error.response?.data?.message ||
  //         "Something went wrong. Please try again."
  //     );
  //   }
  // };


const handleLogin = async () => {
  dispatch(signinStart());
  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  try {
    const response = await axios.post(
      "https://vitecost-project-2.onrender.com/api/user/signin",
      { email, password },
      { withCredentials: true }
    );

    console.log("Login response:", response.data);

    if (response.data?.user && response.data?.message) {
      dispatch(
        signinSuccess({
          user: response.data.user,
          message: response.data.message,
        })
      );
      navigate("/");
    } else {
      dispatch(signinError(response.data?.message || "Invalid credentials"));
    }
  } catch (error) {
    console.error("Login error:", error.response || error.message);
    dispatch(
      signinError(error.response?.data?.message || "Something went wrong")
    );
    alert(error.response?.data?.message || "Login failed.");
  }
};




  return (
    <div className="container">
      <div className="login-box">
        <h2>Login to your account</h2>

        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" /> I'm on a personal device, keep me signed
            in.
          </label>
        </div>

        <button className="btn" onClick={handleLogin}>
          Sign In
        </button>

        <Link to="/signup">
          {" "}
          <a href="/" className="forgot-link">
            create account
          </a>
        </Link>
      </div>

      <div className="benefits">
        <h3>What are the benefits of registering?</h3>
        <ul>
          <li>Enjoy super-speedy checkout with saved info</li>
          <li>Access personalized savings in your Promo Pocket</li>
          <li>View your order status & history</li>
          <li>Modify your order, payment & shipping options</li>
          <li>Quickly re-order previously purchased products</li>
          <li>Schedule automatic deliveries with bonuses</li>
        </ul>

        <p>Don’t want to register? Continue your order as a .</p>
      </div>
    </div>
  );
};

export default Login;
