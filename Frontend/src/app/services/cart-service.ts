import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  currentCartItems = this.cartItems.asObservable();

  products: Product[] = [
    {
      id: 1,
      name: 'OnePlus Nord 3',
      price: 32999,
      description: '5G Smartphone with 50MP Camera',
      image: 'assets/Phone.jpg'
    },
    {
      id: 2,
      name: 'Boat Airdopes',
      price: 1999,
      description: 'Wireless Earbuds with 40hrs Playback',
      image: 'assets/Headphone.jpg'
    },
    {
      id: 3,
      name: 'Laptop',
      price: 49999,
      description: 'i5 Laptop with 16GB RAM',
      image: 'assets/Laptop.jpg'
    }
  ];

  formatINR(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }

  addToCart(product: Product) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentItems.push({ product, quantity: 1 });
    }
    this.cartItems.next([...currentItems]);
  }

  removeFromCart(productId: number) {
    const updatedItems = this.cartItems.value.filter(
      item => item.product.id !== productId
    );
    this.cartItems.next(updatedItems);
  }

  updateQuantity(productId: number, change: number) {
    const updatedItems = this.cartItems.value.map(item => {
      if (item.product.id === productId) {
        const newQuantity = item.quantity + change;
        return { ...item, quantity: Math.max(1, newQuantity) };
      }
      return item;
    });
    this.cartItems.next(updatedItems);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce(
      (total, item) => total + (item.product.price * item.quantity),
      0
    );
  }
}
