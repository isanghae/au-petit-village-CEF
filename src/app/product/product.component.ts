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
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}