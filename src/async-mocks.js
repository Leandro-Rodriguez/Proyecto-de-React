// src/async-mocks.js
const products = [
    { id: '1', name: 'Taladro', price: 33000, category: 'herramientas', description: 'Descripción del taladro', image: 'assets/taladro.png' },
    { id: '2', name: 'Microondas', price: 75000, category: 'electrodomesticos', description: 'Descripción del microondas', image: 'assets/microondas.jpeg' },
    { id: '3', name: 'Lámpara', price: 18500, category: 'iluminacion', description: 'Descripción de la lámpara', image: 'assets/lampara.png' },
    { id: '4', name: 'Celular', price: 99999, category: 'electronica', description: 'Descripción del celular', image: 'assets/celular.jpg' },
    { id: '5', name: 'Reflector', price: 14999, category: 'iluminacion', description: 'Descripción del reflector', image: 'assets/reflector.jpg' },
    { id: '6', name: 'Tira RGB', price: 5000, category: 'iluminacion', description: 'Descripción de la tira RGB', image: 'assets/tirargb.jpg' },
    { id: '7', name: 'Heladera', price: 120000, category: 'electrodomesticos', description: 'Descripción de la heladera', image: 'assets/heladera.jpg' },
    { id: '8', name: 'Sierra', price: 43450, category: 'herramientas', description: 'Descripción de la sierra', image: 'assets/sierra.jpg' },
    { id: '9', name: 'Parlante', price: 32000, category: 'audio', description: 'Descripción del parlante', image: 'assets/parlante.jpg' },
    { id: '10', name: 'Campera Adidas', price: 21999, category: 'ropa', description: 'Descripción de la campera', image: 'assets/campera.jpeg'},
    { id: '11', name: 'Vino Uvita', price: 500, category: 'otros', description: 'Descripción del vino', image: 'assets/vino.jpg'},
    // más productos
  ];
  
  export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
      if (categoryId) {
        resolve(products.filter(product => product.category === categoryId));
      } else {
        resolve(products);
      }
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      resolve(products.find(product => product.id === id));
    });
  };
  