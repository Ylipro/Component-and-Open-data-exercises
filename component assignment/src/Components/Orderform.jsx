import React, { useState } from 'react';

const ProductForm = () => {
    const products = ['AMD Ryzen 5 3600', 'Intel Core i5 10400F', 'AMD Ryzen 7 3700X'];
    const prices = [245, 182, 329];
  
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
  
    const handleProductChange = (e) => {
      setSelectedProductIndex(e.target.value);
    };
  
    const handleQuantityChange = (delta) => {
      setQuantity((prevQuantity) => Math.max(prevQuantity + delta, 0));
    };
  
    return (
      <div style={styles.container}>
        <h2>Select product</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product:</label>
          <select
            value={selectedProductIndex}
            onChange={handleProductChange}
            style={styles.select}
          >
            {products.map((product, index) => (
              <option key={index} value={index}>
                {product} ({prices[index]}€)
              </option>
            ))}
          </select>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Quantity:</label>
          <button onClick={() => handleQuantityChange(-1)} style={styles.button}>-</button>
          <span style={styles.quantity}>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)} style={styles.button}>+</button>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      border: '2px solid #000',
      padding: '15px',
      borderRadius: '5px',
      maxWidth: '300px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif',
    },
    formGroup: {
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      marginRight: '10px',
      fontWeight: 'bold',
    },
    select: {
      flexGrow: 1,
      padding: '5px',
      fontSize: '16px',
    },
    button: {
      padding: '5px 10px',
      margin: '0 5px',
      fontSize: '18px',
    },
    quantity: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };
  
  export default ProductForm;