import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService

  constructor(private apiService: ApiService) {
    this.jwtHelper = new JwtHelperService();
  }

  public login(model: any): Observable<boolean> {
    return this.apiService.post('login/token', model).pipe(map(res => {
      this.addToken(res.access_token);
      return this.checkToken();
    }))
  }

  public addToken(token): void {
    localStorage.setItem('jwt', token);
  }
  public removeToken(): void {
    localStorage.removeItem('jwt');
  }

  isAuthenticated(): boolean {
    return this.checkToken();
  }

  public checkToken(): boolean {
    const token: string = localStorage.getItem('jwt');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
