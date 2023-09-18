import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = "http://localhost:55736/api";


  constructor(private http: HttpClient) { }


  login(emailId: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/Accounts`, { emailId, password });
  }
}

