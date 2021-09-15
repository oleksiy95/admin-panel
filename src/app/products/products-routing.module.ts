import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../shared';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/new', component: NewProductComponent },
      { path: 'products/:id', component: ProductDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
