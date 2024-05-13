import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import axios from 'axios';
import Header from './component/templates/header';
import Sidebar from './component/templates/sidebar';
import ProductList from './component/templates/productlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import style from './App.css';
import About from './component/pages/about';
import Privacy from './component/pages/privacy';
import { Card, Button } from "react-bootstrap";
import AuthModal from './component/templates/AuthModal';


function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/backend/products/')
      .then(res => setProducts(res.data.slice(0, 5)))
      .catch(err => console.error(err));

    axios.get('http://localhost:8080/backend/categories/')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));

    axios.get('http://localhost:8080/backend/brands/')
      .then(res => setBrands(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSelectCategory = categoryId => {
    const newSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    setSelectedCategories(newSelection);
    fetchProducts(newSelection, selectedBrands);
  };

  const handleSelectBrand = brandId => {
    const newSelection = selectedBrands.includes(brandId)
      ? selectedBrands.filter(id => id !== brandId)
      : [...selectedBrands, brandId];
    setSelectedBrands(newSelection);
    fetchProducts(selectedCategories, newSelection);
  };

  const fetchProducts = (categoryIds, brandIds) => {
    const params = new URLSearchParams();
    categoryIds.forEach(id => params.append('category_ids', id));
    brandIds.forEach(id => params.append('brand_ids', id));

    axios.get(`http://localhost:8080/backend/products/?${params.toString()}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  return (
    <Router>
    <Container fluid>
      <Row>
      <Col cs={12}>
      <Header/>
      <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>Login / Sign Up</Button>
      <AuthModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
        </Col>
        </Row>
        <Row>
        <Col xs={3}>
          <Sidebar  
        categories={categories} 
        brands={brands} 
        onSelectCategory={handleSelectCategory}
        onSelectBrand={handleSelectBrand}
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}/>
        </Col>
        <Col xs={9}>
          <Routes>
            <Route path="/" element={<ProductList products={products}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
        </Routes>
        </Col>
        </Row> 
        
       
      </Container>
      </Router>
  );
}

export default App;
