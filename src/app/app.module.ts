import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { PromotionsModule } from './promotions/promotions.module';
import { PaymentsModule } from './payments/payments.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { DeleteDialogComponent, LoadComponent, LogInterceptor } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteDialogComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PromotionsModule,
    OrdersModule,
    ProductsModule,
    PaymentsModule,    
    LoginModule,
    AppRoutingModule,
    SharedModule,
  ],
  entryComponents: [DeleteDialogComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
