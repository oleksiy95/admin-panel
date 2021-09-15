import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) { }

  public getAll(): Observable<Product[]> {
    return this.api.get(`products`);
  }

  public get(id: number): Observable<Product> {
    return this.api.get(`products/${id}`);
  }

  public create(product: Product): Observable<Product> {
    return this.api.post(`products/`, product);
  }

  public update(id: number, product: Product): Observable<Product> {
    return this.api.put(`products/${id}`, product);
  }

  public delete(id: number): Observable<boolean> {
    return this.api.delete(`products/${id}`);
  }
}
