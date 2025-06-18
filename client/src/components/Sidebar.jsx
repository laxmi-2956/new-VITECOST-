// src/components/Sidebar.jsx
import "../css/Sidebar.css"

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>✕</button>
      <div className="sidebar-content">
        <p className="signin">👤 Sign In</p>
        <hr />

        <div className="sidebar-section">
         <p className="back" onClick={onClose} style={{ cursor: 'pointer' }}>
  &lt; Back to main menu
</p>
          <h4>🪻 Herbs & Homeopathy</h4>
          <ul>
            <li>New in Herbs & Homeopathy</li>
            <li>Herbs & Homeopathy Deals</li>
          </ul>
          <h5>Top Herbs & Homeopathy</h5>
          <ul>
            <li>Turmeric</li>
            <li>Aloe Vera</li>
            <li>Mushrooms</li>
            <li>Milk Thistle</li>
          </ul>
          <h5>Specialty</h5>
          <ul>
            <li>Non-GMO</li>
            <li>Gluten-Free</li>
            <li>Organic</li>
            <li>Vegetarian</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>📁 Categories</h4>
          <ul>
            <li>Vitacost Brands</li>
            <li>Vitamins & Supplements</li>
            <li>Professional Supplements</li>
            <li>Food & Beverages</li>
            <li>Beauty & Personal Care</li>
            <li>Active Lifestyle & Fitness</li>
            <li>Herbs & Homeopathy</li>
            <li>Household Essentials</li>
            <li>Baby & Kids Products</li>
            <li>Pet Supplies</li>
            <li>Weight Management</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>✨ New! Menopause</h4>
          <h5>Spotlight</h5>
          <ul>
            <li>Sport Certified</li>
            <li>Health Goals</li>
            <li>Healthy Snacks</li>
            <li>Probiotics</li>
            <li>GLP-1 Support</li>
          </ul>

          <h5>Popular</h5>
          <ul>
            <li>New Products</li>
            <li>Sustainable Favorites</li>
            <li>Clean Beauty</li>
            <li>Shop By Brand</li>
            <li>Personalized Picks</li>
          </ul>

          <h5>Specialty Diets</h5>
          <ul>
            <li>Keto</li>
            <li>Gluten-Free</li>
            <li>Vegan</li>
            <li>Paleo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
