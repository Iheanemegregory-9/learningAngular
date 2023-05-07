import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Product[]{
    return [
      {
        name: 'Webcam',
        price: 200
      },
      {
        name: 'Microphone',
        price: 100
      },
      {
        name: 'Wireless Keyboard',
        price: 70
      }
    ]
  }

  constructor() { }
}
