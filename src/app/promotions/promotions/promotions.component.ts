import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Promotion, PromotionService } from 'src/app/shared';
import { PromotionDataSource } from './promotion-datasource';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Promotion>;
  dataSource: PromotionDataSource;
  displayedColumns = ['image','name', 'description', 'action'];

  constructor(private promotionService: PromotionService, private router: Router) {
    this.dataSource = new PromotionDataSource(promotionService);
  }
  ngOnInit(): void {
    
  }

  public openPromotion(promotion: Promotion) {
    this.router.navigate(['promotions', promotion.id])
  }

  public openNew() {
    this.router.navigate(['promotions', 'new'])
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
