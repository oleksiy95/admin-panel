import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStatus } from '../enums';
import { Order } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private api: ApiService) { }

  public getAll(): Observable<Order[]> {
    return this.api.get(`orders`);
  }

  public get(id: number): Observable<Order> {
    return this.api.get(`orders/${id}`);
  }

  public updateStatus(id: number, status: OrderStatus): Observable<Order> {
    return this.api.put(`orders/${id}/status/${status}`, {});
  }

  public delete(id: number): Observable<boolean> {
    return this.api.delete(`orders/${id}`);
  }
}
