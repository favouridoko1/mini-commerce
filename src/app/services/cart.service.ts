import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private storageKey = 'cart';

  getCart(): any[] {
    const cart = localStorage.getItem(this.storageKey);
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(product: any) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existing = cart.find((item: any) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

  clearCart(): void {
    localStorage.removeItem(this.storageKey);
  }

  removeFromCart(productId: number): void {
    const cart = this.getCart().filter((item) => item.id !== productId);
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}
