import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);

  const axiosGet = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      console.log(response.data.products)
    } catch (error) {
      console.error("There was an error fetching the products: ", error);
    }
  }

  useEffect(() => {
    axiosGet();
  }, []);

  return (
    <div>
      <div className="container mt-2">
        <div className="row justify-content-end">
          <div className="col-auto">
            <button className="btn btn-primary">
              <Link
                style={{ color: "white" }}
                to={"/productadd"}
                className="text-decoration-none"
              >
                Add Product{" "}
              </Link>{" "}
            </button>{" "}
          </div>{" "}
        </div>
      </div>{" "}
      <div className="container mt-0 mt-md-5">
        <div className="row">
          {" "}
          {products.map((product) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
              {" "}
              <ProductCard product={product} />{" "}
            </div>
          ))}{" "}
        </div>
      </div>{" "}
    </div>
  );
}

