import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = ({ categories, brands, onSelectCategory, onSelectBrand, selectedCategories, selectedBrands }) => {
  return (
    <>
      <h2>Categories</h2>
      <ListGroup>
        {categories.map(category => (
          <ListGroup.Item 
              key={category.category_id} action
              onClick={() => onSelectCategory(category.category_id)}
              active={selectedCategories.includes(category.category_id)}>
            {category.category_name}
          </ListGroup.Item>
        ))}
        </ListGroup>
      <h2>Brands</h2>
      <ListGroup>
        {brands.map(brand => (
          <ListGroup.Item
              key={brand.brand_id} 
              action
              onClick={() => onSelectBrand(brand.brand_id)}
              active={selectedBrands.includes(brand.brand_id)}>
            {brand.brand_name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Sidebar;

