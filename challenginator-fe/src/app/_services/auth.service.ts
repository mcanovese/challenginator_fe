import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:8080/user/';

const httOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any>{
    return this.http.post(AUTH_API+'sign-in',{
      email,password}, httOptions);
    }

    register(email: string, name: string, surname: string, password: string): Observable<any>{
    return this.http.post(AUTH_API+'sign-up',{
      email,name,surname,password}, httOptions);

    }

    authCheck(jwt: string|null): Observable<any>{
    return this.http.post(AUTH_API+'authcheck',{
      jwt}, httOptions);
  }




}

