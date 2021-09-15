import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../shared';
import { NewPromotionComponent } from './new-promotion/new-promotion.component';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
      { path: 'promotions', component: PromotionsComponent },
      { path: 'promotions/new', component: NewPromotionComponent },
      { path: 'promotions/:id', component: PromotionDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsRoutingModule { }
