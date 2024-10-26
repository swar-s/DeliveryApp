import { parseCsvFile } from '../utils/csvParser';

class ProductService {
  constructor() {
    this.products = new Map();
  }

  initializeProducts(csvData) {
    const parsedData = parseCsvFile(csvData);
    parsedData.forEach(product => {
      this.products.set(product.id, {
        id: product.id,
        name: product.name,
        price: parseFloat(product.price)
      });
    });
  }

  getProduct(id) {
    return this.products.get(id);
  }

  getAllProducts() {
    return Array.from(this.products.values());
  }

  searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return this.getAllProducts().filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.id.toString().includes(searchTerm)
    );
  }
}

export default new ProductService();