import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from './product';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private sub$?: Subscription;
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub$ = this.productService.getProducts().subscribe({
      next: (data) => { this.products = data; console.log(data) },
      error: (err) => { console.error(err) }
    })
  }

  filterProduct(filteredProduct: Product[]) {
    this.products = filteredProduct;
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }
}
