import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  materiau: string;
  hauteur: string;
  disponibilite: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products
      .filter(p => p.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .sort((a, b) => this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
  }

  onSearchChange() {
    this.applyFilters();
  }

  onSortChange(order: 'asc' | 'desc') {
    this.sortOrder = order;
    this.applyFilters();
  }
}
