import { parseCsvFile } from '../utils/csvParser';
import { calculateDeliveryDate } from '../utils/dateUtils';

class DeliveryService {
  constructor() {
    this.pincodeData = new Map();
  }

  initializePincodeData(csvData) {
    const parsedData = parseCsvFile(csvData);
    parsedData.forEach(entry => {
      this.pincodeData.set(entry.Pincode, {
        provider: entry['Logistics Provider'],
        tat: parseInt(entry.TAT)
      });
    });
  }

  getDeliveryInfo(pincode) {
    const info = this.pincodeData.get(pincode);
    
    if (!info) return null;

    return {
      ...info,
      estimatedDate: calculateDeliveryDate(info.tat)
    };
  }

  validatePincode(pincode) {
    return this.pincodeData.has(pincode);
  }
}

export default new DeliveryService();