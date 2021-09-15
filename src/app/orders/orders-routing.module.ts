import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../shared';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/:id', component: OrderDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
