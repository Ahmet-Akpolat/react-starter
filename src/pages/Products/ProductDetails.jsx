import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    let mounted = true;
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        if (mounted) {
          setProduct(response.data);
        }
      } catch (error) {
        console.error('Ürün detayları yüklenirken bir hata oluştu:', error);
      }
    };

    fetchProductDetails();

    return () => {
      mounted = false;
    };
  }, [id]);

  // Eğer ürün bilgisi henüz yüklenmediyse, hiçbir şey render etmeyin
  if (!product) {
    return null;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="bg-light p-5 rounded border border-2" style={{ borderColor: '#dee2e6', borderRadius: '15px' }}>
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner" style={{ borderRadius: '15px' }}>
                {product.images.map((image, idx) => (
                  <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                    <img src={image} className="d-block w-100" alt={`Product ${idx}`} style={{ maxHeight: '500px', objectFit: 'contain', borderRadius: '15px' }} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev" style={{ borderRadius: "5px", width: '70px', height: '50px', position: 'absolute', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(108, 117, 125, 0.5)' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next" style={{ borderRadius: "5px", width: '70px', height: '50px', position: 'absolute', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(108, 117, 125, 0.5)' }}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="text-center mt-4">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <h4 className="price">Current Price: <span>{product.price}$</span></h4>
              <div className="actions my-3">
                <button type="button" className="btn btn-dark me-2">Satın Al!</button>
                <button type="button" className="btn btn-secondary">Sepete Ekle</button>
                <div>
                <button type="button" className="btn btn-success mt-2">Add to Wishlist! &#10084;&#65039;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
