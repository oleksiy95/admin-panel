import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPromotionComponent } from './new-promotion/new-promotion.component';


@NgModule({
  declarations: [PromotionsComponent, PromotionDetailComponent, NewPromotionComponent],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PromotionsModule { }
