import { useEffect, useState } from 'react';
import  "../css/DealSection.css";
import { Link } from 'react-router-dom';

const DealsSection = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch('https://vitecost-project-2.onrender.com/api/products/getproducts') // Adjust if your base URL or route is different
      .then((res) => res.json())
      .then((data) => {
        // Optionally filter only deals
        const filteredDeals = data.slice(0, 5); // or data.filter(p => p.isDeal)
        setDeals(filteredDeals);
      })
      .catch((err) => console.error('Failed to load deals:', err));
  }, []);

  return (
    <div className="deals-container">
      <h2 className="deals-heading">Deals You'll Love</h2>
      <div className="deals-grid">
        {deals.map((product) => (
          <div className="deal-item" key={product._id}>
              
                  <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
              <img src={product.image} alt={product.name} className="deal-image" />
            </div>
          
            <p className="deal-name">{product.price}</p>
             <p className="deal-name" style={{fontSize : "20px" , fontWeight : "bolder"}}>{product.description}</p>
                  </Link>
          
          </div>
        ))}
        <div className="deal-item see-all">
          <div className="deal-image-circle see-all-circle">
            <p className="see-all-text">Shop All</p>
          </div>
          <p className="see-all-caption">See all deals</p>
        </div>
      </div>

      <div className="deals-buttons">
        <button>Quick reorder</button>
        <button>New arrivals</button>
        <button className="active">See all deals</button>
        <button>Shop by brand</button>
        <button>Autoship</button>
      </div>
    </div>
  );
};

export default DealsSection;
