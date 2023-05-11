import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Directive({
  selector: '[appProducHost]'
})
export class ProducHostDirective implements OnInit{

  constructor(private vc :ViewContainerRef) { }

  ngOnInit(): void {
    const productRef = this.vc.createComponent(ProductDetailComponent);
    productRef.setInput('product', {
      name: 'Optical Mouse',
      price: 130
    })
  }

}
