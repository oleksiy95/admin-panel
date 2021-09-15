import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Payment, PaymentService, PaymentStatus, PaymentType } from 'src/app/shared';
import { PaymentDataSource } from './payment-datasource';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Payment>;
  status = PaymentStatus;
  type = PaymentType;
  dataSource: PaymentDataSource;
  displayedColumns = ['createdDate', 'type', 'status', 'amount'];

  constructor(private paymentService: PaymentService) {
    this.dataSource = new PaymentDataSource(paymentService);
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
