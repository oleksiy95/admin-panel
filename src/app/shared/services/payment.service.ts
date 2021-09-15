import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private api: ApiService) { }

  public getAll(): Observable<Payment[]> {
    return this.api.get(`payments`);
  }

  public get(id: number): Observable<Payment> {
    return this.api.get(`payments/${id}`);
  }
}
