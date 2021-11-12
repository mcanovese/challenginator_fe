import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable} from "rxjs";

const API_URL = 'http://localhost:8080/user/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: any[] = [];

  constructor(private http: HttpClient) {
    this.generateUserList();
  }

  getPublicContent(): Observable<any>{
    return this.http.get(API_URL+'all',{responseType: 'text'});
  }

  getListUser():Observable<any>{
    return this.http.get(API_URL+'list');
  }

  private generateUserList():any{
    this.getListUser().subscribe(
      (data)=>{
        this.userList = data;
      },
      (error)=>{
        console.log("error");
      }
    )
  }

  public getUserList():any{
    return this.userList;
  }





}
