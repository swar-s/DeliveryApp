import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import { globalStyles } from '../styles/globalStyles';
import productService from '../services/productService';

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    productService.initializeProducts(productsCsvData);
    setProducts(productService.getAllProducts());
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredProducts = productService.searchProducts(query);
    setProducts(filteredProducts);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[globalStyles.input, styles.searchInput]}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onPress={() => onSelectProduct(product)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    marginBottom: 16,
  }
});

export default ProductList;