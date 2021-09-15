import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeliveryType, Order, OrderService, OrderStatus, PaymentType, PromotionType, SignalRService } from 'src/app/shared';
import { OrderDataSource } from './order-datasource';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Order>;
  deliveryType = DeliveryType;
  status = OrderStatus;
  paymentType = PaymentType;
  promotionType = PromotionType;
  dataSource: OrderDataSource;
  displayedColumns = ['createdDate', 'name', 'phone', 'street', 'number', 'paymentType', 'deliveryType', 'promotion', 'status', 'totalPrice'];

  constructor(private orderService: OrderService, private router: Router, private signalR: SignalRService) {
    this.dataSource = new OrderDataSource(orderService, signalR);
  }
  ngOnInit(): void {
  }

  public openOrder(order: Order) {
    this.router.navigate(['orders', order.id])
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
