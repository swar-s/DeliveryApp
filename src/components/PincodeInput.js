import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import deliveryService from '../services/deliveryService';

const PincodeInput = ({ onDeliveryInfo }) => {
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');

  const handlePincodeChange = (text) => {
    setPincode(text);
    setError('');
  };

  const handlePincodeSubmit = () => {
    if (deliveryService.validatePincode(pincode)) {
      const deliveryInfo = deliveryService.getDeliveryInfo(pincode);
      onDeliveryInfo(deliveryInfo);
      setError('');
    } else {
      setError('Invalid pincode');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[globalStyles.input, styles.pincodeInput]}
        placeholder="Enter delivery pincode"
        value={pincode}
        onChangeText={handlePincodeChange}
        onSubmitEditing={handlePincodeSubmit}
        keyboardType="numeric"
        maxLength={6}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  pincodeInput: {
    marginBottom: 8,
  },
  error: {
    color: colors.error,
    fontSize: 14,
  }
});

export default PincodeInput;