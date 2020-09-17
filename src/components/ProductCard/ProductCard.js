import React from 'react';
import productImg from '../../assets/phone.png';
import './ProductCard.css'

const ProductCard = () => {
  return (
      <div className="card">
        <div className="card__img">
          <img src={productImg} className="card-img-top" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of
            the card's content.</p>
          <p className="card__price">
            12 999 ₴
          </p>
          <a href="#" className="btn btn-primary btn-sm">Go somewhere</a>
        </div>
      </div>
  );
};

export default ProductCard;