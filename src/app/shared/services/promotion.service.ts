import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Promotion } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private api: ApiService) { }

  public getAll(): Observable<Promotion[]> {
    return this.api.get(`promotions`);
  }

  public get(id: number): Observable<Promotion> {
    return this.api.get(`promotions/${id}`);
  }

  public create(promotion: Promotion): Observable<Promotion> {
    return this.api.post(`promotions`, promotion);
  }

  public update(id: number, promotion: Promotion): Observable<Promotion> {
    return this.api.put(`promotions/${id}`, promotion);
  }

  public delete(id: number): Observable<boolean> {
    return this.api.delete(`promotions/${id}`);
  }
}
