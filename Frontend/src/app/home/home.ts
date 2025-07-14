import { Component } from '@angular/core';
import { CartService, Product } from '../services/cart-service';
import { CommonModule } from '@angular/common'; // Import Product interface

@Component({
  selector: 'app-home',
  imports: [CommonModule], // Import CommonModule for Angular directives
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  products: Product[]; // Properly typed with Product interface

  constructor(private cartService: CartService) {
    this.products = this.cartService.products;
  }

  addToCart(product: Product): void { // Added return type
    this.cartService.addToCart(product);
  }
}
