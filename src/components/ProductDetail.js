import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography } from '../styles/globalStyles';

const ProductDetail = ({ product, onBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={typography.body1}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={[typography.h1, styles.name]}>{product.name}</Text>
        <Text style={[typography.body1, styles.price]}>
          ${product.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 16,
    backgroundColor: colors.primary,
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  name: {
    color: colors.text.primary,
  },
  price: {
    color: colors.text.secondary,
  }
});

export default ProductDetail;