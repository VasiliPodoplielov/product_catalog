import React from 'react';
import './Catalog.css';
import ProductCard from "../../components/ProductCard/ProductCard";

const Catalog = () => {
  return (
      <div className="catalog__wrapper">
        <div className="container">
          <h1 className="catalog__title">Каталог</h1>
          <div className="products__wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
  );
};

export default Catalog;
