import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  decodeToken(token: string): any {
    return jwt_decode(token);
  }
  private baseUrl = 'http://localhost:8088/api';

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, user);
  }
  
   

  // signup(user: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/user/register`, user);
  // }
}
