import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, View } from 'react-native';
import ProductList from './src/components/ProductList';
import ProductDetail from './src/components/ProductDetail';
import PincodeInput from './src/components/PincodeInput';
import DeliveryEstimate from './src/components/DeliveryEstimate';
import { globalStyles } from './src/styles/globalStyles';
import { loadInitialData } from './src/utils/dataLoader';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      await loadInitialData();
      setIsLoading(false);
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={globalStyles.colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {selectedProduct ? (
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
        />
      ) : (
        <>
          <PincodeInput onDeliveryInfo={setDeliveryInfo} />
          <ProductList onSelectProduct={setSelectedProduct} />
        </>
      )}
      {deliveryInfo && <DeliveryEstimate deliveryInfo={deliveryInfo} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalStyles.colors.background,
  }
});