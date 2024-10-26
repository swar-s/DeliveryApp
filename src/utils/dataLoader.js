// src/utils/dataLoader.js
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import productService from '../services/productService';
import deliveryService from '../services/deliveryService';

export const loadInitialData = async () => {
  try {
    // Load products data
    const productsModule = require('../data/products.csv');
    const productsAsset = Asset.fromModule(productsModule);
    await productsAsset.downloadAsync();
    const productsContent = await FileSystem.readAsStringAsync(productsAsset.localUri);
    productService.initializeProducts(productsContent);

    // Load pincodes data
    const pincodesModule = require('../data/pincodes.csv');
    const pincodesAsset = Asset.fromModule(pincodesModule);
    await pincodesAsset.downloadAsync();
    const pincodesContent = await FileSystem.readAsStringAsync(pincodesAsset.localUri);
    deliveryService.initializePincodeData(pincodesContent);

    return true;
  } catch (error) {
    console.error('Error loading initial data:', error);
    return false;
  }
};