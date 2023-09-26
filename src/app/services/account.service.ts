import { User } from './../accounts/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private user!: User;
  //private baseUrl = "http://localhost:55736/api";
  private baseUrl = "http://localhost:55736";
  private authHeader!: HttpHeaders;
  private header!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.authHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })

    // let authorizeData = 'Bearer ' + sessionStorage.getItem("token");

    // this.header = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': authorizeData
    // })
  }

  login(emailId: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', emailId)
      .set('password', password)
      .set('grant_type', 'password');
    return this.http.post(`${this.baseUrl}/token`, body, { headers: this.authHeader });
  }

  getRole(): Observable<any> {
    //let authorizeData = 'Bearer ' + sessionStorage.getItem("token");

    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    })

    return this.http.get(`${this.baseUrl}/api/accounts/getrole`, { headers: this.header });
  }

}

