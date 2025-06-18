import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpVerify.css";
import axios from "axios";

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const inputs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      setMessage("Please enter complete 6-digit OTP.");
      return;
    }

    try {
      const res = await axios.post(
        "https://vitecost-project-2.onrender.com/api/user/verify",
        { otp: fullOtp },
        { withCredentials: true }
      );

      setMessage(res.data.message || "OTP verified successfully.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.log("OTP verification error:", err);
      setMessage(err?.response?.data?.message || "OTP verification failed.");
    }
      };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2 className="otp-title">🔐 Verify OTP</h2>
        <div className="otp-input-group">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="otp-box"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputs.current[index] = el)}
            />
          ))}
        </div>
        <button className="otp-button" onClick={handleVerify}>
          Verify OTP
        </button>
        {message && <p className="otp-message">{message}</p>}
      </div>
    </div>
  );
};

export default OtpVerify;
