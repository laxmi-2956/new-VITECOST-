import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signupError, signupStart, signupSuccess } from "../redux/auth/authslice";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Signup logic
  const handleSignup = async () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(signupStart());

    try {
      const response = await axios.post(
        "https://vitecost-project-2.onrender.com/api/user/signup",
        { name, email, password },
        { withCredentials: true }
      );

      console.log("Signup Response:", response.data);
      sessionStorage.setItem("verify_email", email);

      if (response.status === 200) {
        dispatch(signupSuccess());
        alert("OTP sent! Redirecting...");
        setTimeout(() => navigate("/verify"), 1000);
      } else {
        dispatch(signupError(response?.data?.message || "Signup failed"));
        alert(response?.data?.message || "Signup failed");
      }
    } catch (error) {
      dispatch(signupError(error?.response?.data?.message || "Signup failed"));
      alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Create your account</h2>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="forgot-link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>

      <div className="benefits">
        <h3>Why create an account?</h3>
        <ul>
          <li>Faster checkout process</li>
          <li>Access to exclusive deals</li>
          <li>Track and manage orders</li>
          <li>Save addresses & payment methods</li>
          <li>Get personalized offers</li>
        </ul>

        <p>
          Not ready to register? Continue as a{" "}
          <a href="/" className="guest-link">
            Guest
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
