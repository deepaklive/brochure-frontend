import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})

export class AuthService extends DataService {
  constructor(
    http: HttpClient,
    private router:Router,
    ) {
    super(environment.brochure_api + "/users", http);
  }


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
      return this.getbySearch2('email', email, 'password', password)
  }
}
