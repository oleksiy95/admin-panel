import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryType, DialogService, Order, OrderComponent, OrderService, OrderStatus, PaymentStatus, PaymentType, ProductType, PromotionType } from 'src/app/shared';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public order: Order;
  public deliveryType = DeliveryType;
  public orderStatus = OrderStatus;
  public paymentType = PaymentType;
  public paymentStatus = PaymentStatus;
  public productType = ProductType;
  public promotionType = PromotionType;

  public components: OrderComponent[] = [];
  public pizzas: OrderComponent[] = [];

  constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router, private dialog: DialogService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.orderService.get(id).subscribe(res => {
        this.order = res
      });
    });
  }

  public updateStatus(status: OrderStatus) {
    this.orderService.updateStatus(this.order.id, status).subscribe(res => this.router.navigate(['orders']));
  }

  public delete() {
    this.dialog.openDeleteDialog().subscribe(res => {
      if (!res)
        return;
        
      this.orderService.delete(this.order.id).subscribe(res => this.router.navigate(['orders']));
    })

  }

}
