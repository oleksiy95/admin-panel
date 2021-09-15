import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PaymentsComponent, PaymentDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
