import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  currentStyle = {
    color: 'greenyellow',
    border: '1px solid red',
    fontSize: '40px',
    width: '80px',
    padding: '20px'
  }

  

}
