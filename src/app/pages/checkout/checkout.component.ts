import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;
  checkoutForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    // Get cart data
    const data = localStorage.getItem('cart');
    this.cartItems = data ? JSON.parse(data) : [];
    this.calculateTotal();

    // Initialize reactive form
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  placeOrder(): void {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    const shippingInfo = this.checkoutForm.value;

    // Simulate order placement
    localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
    localStorage.removeItem('cart');

    this.cartItems = [];
    this.totalAmount = 0;
    this.checkoutForm.reset();

    this.toastr.success('Order placed successfully!', 'Success');
  }
}
