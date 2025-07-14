import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/products.json').subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Failed to load products:', err),
    });
  }

  addToCart(product: any) {
    console.log('Add to cart:', product);
    // LocalStorage or cart service logic here
  }
}
