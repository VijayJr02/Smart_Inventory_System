import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/apiService';
const InventoryTable = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Stock Level</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.stockLevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default InventoryTable;
