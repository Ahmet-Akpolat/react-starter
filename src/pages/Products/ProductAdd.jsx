import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProductAdd() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    category: '',
    description: '',
    price: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Eğer hata mesajları varsa ve kullanıcı ilgili alanı düzelttiyse, hata mesajını kaldır.
    if (errors[name] && value.trim() !== '') {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleProductAdd = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.brand) newErrors.brand = 'Brand is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.price) newErrors.price = 'Price is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('https://dummyjson.com/products/add', formData);
        console.log('Product added successfully:', response.data);
        navigate('/products');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleProductAdd}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title*</label>
          <input placeholder='Camera...' type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} />
          {errors.title && <div className="text-danger">{errors.title}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Brand*</label>
          <input placeholder='Sony...' type="text" className="form-control" id="brand" name="brand" value={formData.brand} onChange={handleInputChange} />
          {errors.brand && <div className="text-danger">{errors.brand}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category*</label>
          <input placeholder='Electronic...' type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleInputChange} />
          {errors.category && <div className="text-danger">{errors.category}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description*</label>
          <textarea placeholder='More about product...' className="form-control" id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>
          {errors.description && <div className="text-danger">{errors.description}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price*</label>
          <input placeholder='100USD...' type="text" className="form-control" id="price" name="price" value={formData.price} onChange={handleInputChange} />
          {errors.price && <div className="text-danger">{errors.price}</div>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={Object.values(errors).some(error => error != null)}>Save</button>
        <p className='mt-2' style={{color : 'grey', opacity: "80%"}}>Fields with * are required</p>
      </form>
    </div>
      // ... (Formun geri kalanı)
  );
}



