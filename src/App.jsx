// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Articulos que no sabias que necesitabas, todo en un solo lugar!" />
    </div>
  );
};

export default App;