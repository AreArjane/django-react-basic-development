import React from 'react';
import { Card, Button } from "react-bootstrap";
import styles from './../../style/ProductList.module.css';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <Card key={product.productID} className={styles.productCard}>
          <Card.Body>
          <Card.Title className={styles.productName}>{product.product_name}</Card.Title>
          <Card.Text className={styles.productPrice}>Price: ${product.product_price}</Card.Text>
          <Button className={styles.buyButton}variant="primary" onClick={() => onAddToCart(product)}>Buy</Button>
          </Card.Body>
          </Card>
      
      ))}
    </div>
  );
};

export default ProductList;

