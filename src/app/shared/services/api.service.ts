import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = environment.api;
  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
  }

  public get(url: string): Observable<any> {
    this.setToken();
    return this.httpClient.get(`${this.api}/${url}`, { headers: this.headers });
  }

  public post(url: string, body: any): Observable<any> {
    this.setToken();
    return this.httpClient.post(`${this.api}/${url}`, body, { headers: this.headers });
  }

  public put(url: string, body: any): Observable<any> {
    this.setToken();
    return this.httpClient.put(`${this.api}/${url}`, body, { headers: this.headers });
  }

  public delete(url): Observable<any> {
    this.setToken();
    return this.httpClient.delete(`${this.api}/${url}`, { headers: this.headers });
  }

  private setToken() {
    const token: string = localStorage.getItem('jwt');
    this.headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
  }
}
