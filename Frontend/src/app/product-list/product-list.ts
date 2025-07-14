import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { CartService, Product } from '../services/cart-service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products: Product[];

  constructor(private cartService: CartService) {
    this.products = this.cartService.products;
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
