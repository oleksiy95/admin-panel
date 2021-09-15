import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../shared';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
    {path: 'payments', component: PaymentsComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
