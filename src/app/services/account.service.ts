import { User } from './../accounts/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private user!: User;
  private baseUrl = "http://localhost:55736/api";


  constructor(private http: HttpClient) { }


  login(emailId: string, password: string): Observable<any> {
    this.user = new User();
    this.user.username = emailId;
    this.user.password = password;
    //console.log(this.user);
    return this.http.post(`${this.baseUrl}/Accounts/Login`, this.user);
  }
}

