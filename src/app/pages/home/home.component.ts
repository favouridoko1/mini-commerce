import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  products: any[] = [];
  filteredProducts: any[] = [];
  private sub!: Subscription;

  constructor(
    private http: HttpClient,
    private searchService: SearchService,
    private cartService: CartService,
    private toastr: ToastrService,
  ) {}
  
  loading = true; 
noResults = false; 

  ngOnInit(): void {
  this.http.get<any[]>('assets/data/products.json').subscribe({
    next: (data) => {
      this.products = data;
      this.filteredProducts = data;
      this.loading = false; // ✅ loading done
      this.noResults = data.length === 0;
    },
    error: (err) => {
      console.error('Failed to load products:', err);
      this.loading = false;
    },
  });

  this.sub = this.searchService.searchTerm$.subscribe((term) => {
    this.filter(term);
  });
}

  filter(query: string) {
  const q = query.toLowerCase();
  this.filteredProducts = this.products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
  this.noResults = this.filteredProducts.length === 0 && query.trim().length > 0;
}

  addToCart(product: any) {
  this.cartService.addToCart(product);
  // this.toastr.success(`${product.name} added to cart successfully!`, 'Success');
  
  product.added = true;
  setTimeout(() => {
    product.added = false;
  }, 2500);
}


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
