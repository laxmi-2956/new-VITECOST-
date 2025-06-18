
import "../css/Footer.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { signupUser } from "../redux/auth/authSlice";

const Footer = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.auth);

  // const handleSignup = async () => {
  //   const result = await dispatch(signupUser({ email, password }));
  //   if (signupUser.fulfilled.match(result)) {
  //     setEmail("");
  //     setPassword("");
  //     alert("Signup Success");
  //     alert("OTP sent to your email");
  //     navigate("/verify");
  //   }
  // };

  return (
    <footer className="footer">
      {/* Top section */}
      <div className="footer-top">
        <div className="footer-icons">
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Facebook"
          />
          <img
            src="https://img.icons8.com/color/48/pinterest--v1.png"
            alt="Pinterest"
          />
          <img
            src="https://img.icons8.com/color/48/instagram-new--v1.png"
            alt="Instagram"
          />
          <img
            src="https://img.icons8.com/color/48/youtube-play.png"
            alt="YouTube"
          />
          <img
            src="https://img.icons8.com/color/48/tiktok--v1.png"
            alt="TikTok"
          />
          <div className="footer-scanner">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://vitacost.com"
              alt="QR Code"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
          </div>
        </div>

        {/* Signup Section */}
        <div className="footer-subscribe">
          <h4>📧 Sign Up & Save</h4>
          <p>
            Get exclusive offers, free shipping events, expert health tips &
            more by signing up for our promotional emails.
          </p>
          {/* <div className="subscribe-input">
            <input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> */}
          {/* <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginLeft: "10px" }}
            /> */}
          {/* <button onClick={handleSignup} disabled={loading}> */}➤
          {/* </button> */}
          {/* </div> */}
          {/* {error && (
            <p className="signup-message" style={{ color: "red" }}>
              {error}
            </p>
          )} */}
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>❓ Instant Online Service</h4>
          <p>
            <strong>💬 Chat with us</strong>
          </p>
          <p>
            Monday-Friday 8am-9pm EST
            <br />
            Saturday-Sunday 9:30am-6pm
          </p>
          <p>
            <strong>📞 1-800-381-0759</strong>
          </p>
          <p>
            Monday-Friday 8am-9pm EST
            <br />
            Saturday: 9:30am-6pm EST
            <br />
            Sunday: Closed
          </p>
          <p>
            <strong>✉️ Email us anytime</strong>
          </p>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="#">Track My Order</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">*Domestic Shipping</a>
            </li>
            <li>
              <a href="#">International Shipping</a>
            </li>
            <li>
              <a href="#">Autoship</a>
            </li>
            <li>
              <a href="#">Request a Product</a>
            </li>
            <li>
              <a href="#">Product Recalls</a>
            </li>
            <li>
              <a href="#">**Promotional Exclusions</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>My Account</h3>
          <ul>
            <li>
              <a href="#">Account Login</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
            <li>
              <a href="#">My Autoship</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Ways To Shop</h3>
          <ul>
            <li>
              <a href="#">Shop by Brand</a>
            </li>
            <li>
              <a href="#">Shop by Category</a>
            </li>
            <li>
              <a href="#">Sport Certified</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">Coupons & Discounts</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">The Vitacost Store</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Free Guides & E-Books</a>
            </li>
            <li>
              <a href="#">The Upside Blog</a>
            </li>
            <li>
              <a href="#">Customer Testimonials</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company Information</h3>
          <ul>
            <li>
              <a href="#">About Vitacost</a>
            </li>
            <li>
              <a href="#">Zero Hunger | Zero Waste</a>
            </li>
            <li>
              <a href="#">Careers at Vitacost</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
          </ul>
        </div>
      </div>


      <div className="footer-bottom">
        <p>
          <a href="#">Privacy Policy</a> |<a href="#">Terms of Use</a> |
          <a href="#">Terms and Conditions of Sale</a> |
          <a href="#">CA - Do Not Sell or Share My Personal Information</a> |
          <a href="#">Your Privacy Choices</a>
        </p>
        <p className="footer-copy">
          Copyright © 2025 Vitacost.com. All rights reserved • Designated
          trademarks and brands are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
