import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { ProductDetailComponent } from '../product-detail/product-detail.component';

import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit {
  selectedProduct: Product | undefined;

  today = new Date();

  products: Product[] = [
    {
      name: 'Webcam',
      price: 200,
    },
    {
      name: 'Microphone',
      price: 100,
    },
    {
      name: 'Wireless Keyboard',
      price: 85,
    },
  ];

  onBuy(name: string) {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }
}
