import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  // Yeni durum değişkeni ekleyerek, kartın görünürlüğünü kontrol ediyoruz.
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteProduct = () => {
    // fetch API çağrısını simüle etmek için doğrudan durumu güncelliyoruz.
    // Gerçek bir istek yapmak istemiyorsanız, bu bölümü yoruma alabilirsiniz.
    /*
    fetch('https://dummyjson.com/products/' + props.product.id, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      alert(props.product.title + " ürünü silindi");
      setIsDeleted(true); // Silme işlemi simülasyonu için durumu güncelle
    });
    */
    
    // Simülasyon için doğrudan silindi durumunu ayarlıyoruz.
    alert(props.product.title + " ürünü silindi");
    setIsDeleted(true);
  }

  // Eğer ürün silinmişse, hiçbir şey render etmeyiz.
  if (isDeleted) {
    return null;
  }

  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" style={{height: "220px"}} alt={props.product.title} />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <Link to={`/products/${props.product.id}`} className="btn btn-primary">Detail</Link>
        <button className='btn btn-danger' onClick={deleteProduct}>Sil</button>
      </div>
    </div>
  );
}
