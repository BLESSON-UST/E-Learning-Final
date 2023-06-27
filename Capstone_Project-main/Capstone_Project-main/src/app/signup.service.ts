import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = 'http://localhost:8088/api';

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/register`, user);
  }
  
  getUserDetails(username: string) {
    const url = `${this.baseUrl}/user/details/${username}`;
    return this.http.get(url);
  }
}
