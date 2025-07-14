import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  constructor(public cartService: CartService, private router: Router) {}

  updateQuantity(id: number, change: number) {
    this.cartService.updateQuantity(id, change);
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
