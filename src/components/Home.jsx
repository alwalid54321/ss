import React, { useState, useEffect } from 'react';

    function Home() {
      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch('/api/sudastock/products')
          .then(res => res.json())
          .then(data => setProducts(data));
      }, []);

      return (
        <div>
          <h2>Home</h2>
          <input type="text" placeholder="Tracking #" />
          <button>Track order</button>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>FOB SDPZU</th>
                <th>CNF AEJEA</th>
                <th>CNF INACH1</th>
                <th>CNF CNAHK</th>
                <th>CNF TRMER</th>
                <th>Price</th>
                <th>Last update</th>
                <th>Forecast</th>
                <th>Request a</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.fob_sdpzu}</td>
                  <td>{product.cnf_aejea}</td>
                  <td>{product.cnf_inach1}</td>
                  <td>{product.cnf_cnahk}</td>
                  <td>{product.cnf_trmer}</td>
                  <td>{product.price}</td>
                  <td>{product.last_update}</td>
                  <td>{product.forecast}</td>
                  <td>
                    <button onClick={() => window.location.href = '/quotation'}>Quotation</button>
                    <button onClick={() => window.location.href = '/sample'}>Sample</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h3>Central Bank Parallel Market Indicator</h3>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Central Bank</th>
                  <th>Parallel Market</th>
                  <th>Indicator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="https://flagcdn.com/24x18/ae.png" alt="UAE Flag" /></td>
                  <td>UAE, Dhr</td>
                  <td>709</td>
                  <td>748</td>
                  <td><span style={{ color: 'green' }}>&#8593;</span></td>
                </tr>
                <tr>
                  <td><img src="https://flagcdn.com/24x18/us.png" alt="USA Flag" /></td>
                  <td>USA, Dollar</td>
                  <td>2500</td>
                  <td>2590</td>
                  <td><span style={{ color: 'red' }}>&#8595;</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    export default Home;
