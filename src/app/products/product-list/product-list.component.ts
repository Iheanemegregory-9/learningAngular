import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';

import { ProductDetailComponent } from '../product-detail/product-detail.component';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit {
  selectedProduct: Product | undefined;

  today = new Date();

  products: Product[] = [];
  // private productService: ProductsService;

  onBuy(name: string) {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  constructor(private productService: ProductsService) {

  }

  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
