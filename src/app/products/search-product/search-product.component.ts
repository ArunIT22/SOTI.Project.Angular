import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit, OnDestroy {

  private sub$?: Subscription;
  products: Product[] = [];
  searchTerm!: number | null;
  //Output Decorator
  @Output() filterEvent = new EventEmitter<Product[]>

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  filterProduct(price: string) {
    this.sub$ = this.productService.searchProduct(Number(price)).subscribe({
      next: (data) => {
        this.filterEvent.emit(data);
      },
      error: (err) => { console.error(err) }
    })
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }

}
