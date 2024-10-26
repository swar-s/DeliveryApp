import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../styles/globalStyles';
import { formatDate } from '../utils/dateUtils';

const DeliveryEstimate = ({ deliveryInfo }) => {
  if (!deliveryInfo) return null;

  return (
    <View style={styles.container}>
      <Text style={[typography.h2, styles.title]}>Delivery Estimate</Text>
      <View style={styles.infoContainer}>
        <Text style={[typography.body1, styles.label]}>Delivery Partner:</Text>
        <Text style={[typography.body1, styles.value]}>
          {deliveryInfo.provider}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[typography.body1, styles.label]}>Expected Delivery:</Text>
        <Text style={[typography.body1, styles.value]}>
          {formatDate(deliveryInfo.estimatedDate)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    color: colors.text.primary,
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: colors.text.secondary,
  },
  value: {
    color: colors.text.primary,
  }
});

export default DeliveryEstimate;