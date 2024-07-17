// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { getProducts } from '../async-mocks';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(categoryId).then(setProducts);
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {greeting && <h2>{greeting}</h2>}
      <div className="row">
        {products.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;