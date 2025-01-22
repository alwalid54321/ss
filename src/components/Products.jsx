import React from 'react';

    function Products() {
      const products = [
        { id: 1, name: 'Product 1', photo: '/product1.jpg', description: 'Intro about the product.', specifications: 'Product 1 specifications', msds: 'MSDS' },
        { id: 2, name: 'Product 2', photo: '/product2.jpg', description: 'Intro about the product.', specifications: 'Product 1 specifications', msds: 'MSDS' },
        { id: 3, name: 'Product 3', photo: '/product3.jpg', description: 'Intro about the product.', specifications: 'Product 1 specifications', msds: 'MSDS' },
        { id: 4, name: 'Product 4', photo: '/product4.jpg', description: 'Intro about the product.', specifications: 'Product 1 specifications', msds: 'MSDS' },
        { id: 5, name: 'Product 5', photo: '/product5.jpg', description: 'Intro about the product.', specifications: 'Product 1 specifications', msds: 'MSDS' },
        { id: 6, name: 'Product 6', photo: '/product6.jpg', description: 'Intro about the product.', specifications: 'Product 1 specifications', msds: 'MSDS' },
      ];

      return (
        <div>
          <h2>Products</h2>
          <input type="text" placeholder="Tracking #" />
          <button>Track order</button>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.photo} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.specifications}</p>
                <p>{product.msds}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Products;
