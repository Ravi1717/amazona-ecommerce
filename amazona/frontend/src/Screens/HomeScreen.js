import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomeScreen(props) {
  //define a hook for the state used useState().

  const [products, setProduct] = useState([]);

  //to fetch data from the server used useEffect().

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProduct(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  return (
    <ul className="products">
      {products.map((product) => (
        <li>
          <div className="product">
            <Link to={"/product/" + product._id}>
              {product.name}
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>
            <div className="product-name"></div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomeScreen;
