import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

/**
 * Provides a 'Product' object
 */
class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number
  ) {}
}

@Component({
  selector: 'inventory-app',
  template: `
  <div class="inventory-app">
    <h1>{{ product.name }}</h1>
    <span>{{ product.sku }}</span>
  </div>
  `
})
class InventoryApp {
  product: Product;
  constructor() {
    this.product = new Product(
          'NICEHAT', 'A Nice Black Hat',
          '/resources/images/products/black-hat.jpg',
          ['Men', 'Accessories', 'Hats'],
          29.99);
  }
}

bootstrap(InventoryApp);
