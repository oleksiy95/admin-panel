import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product, ProductService, ProductType } from 'src/app/shared';
import { ProductDataSource } from './product-datasource';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  type = ProductType;
  dataSource: ProductDataSource;
  displayedColumns = ['image','name', 'description', 'weight', 'type', 'price'];

  constructor(private productService: ProductService, private router: Router) {
    this.dataSource = new ProductDataSource(productService);
  }
  ngOnInit(): void {
    
  }

  public openProduct(product: Product) {
    this.router.navigate(['products', product.id])
  }

  public openNew() {
    this.router.navigate(['products', 'new'])
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
