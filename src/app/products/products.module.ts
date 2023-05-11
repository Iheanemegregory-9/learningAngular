import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProducHostDirective } from './produc-host.directive';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProducHostDirective, FavoritesComponent, ProductViewComponent],
  imports: [CommonModule],

  exports: [ProductListComponent],
})
export class ProductsModule {}
