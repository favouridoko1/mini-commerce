import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  increaseQty(index: number): void {
    this.cartItems[index].quantity += 1;
    this.updateCart();
  }

  decreaseQty(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
      this.updateCart();
    }
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  updateCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }
}
