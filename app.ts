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
     (Products will go here soon)
  </div>
  `
})
class InventoryApp {
}

bootstrap(InventoryApp);
