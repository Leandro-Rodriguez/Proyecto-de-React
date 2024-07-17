// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../async-mocks';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setItem);
  }, [itemId]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">      
      <img src={item.image} alt={item.name} className="img-fluid" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default ItemDetailContainer;