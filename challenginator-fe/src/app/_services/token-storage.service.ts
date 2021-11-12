import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ID = 'user-id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private authService: AuthService) { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void{
    console.log(token);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user:any): void{

    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveUserId(userId:any): void{

    window.sessionStorage.setItem(USER_ID,userId);
  }

  public getUser(): any{
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user){
      return JSON.parse(user);
    }
    return {};
  }

  public isLoggedIn(): Boolean{
    if(window.sessionStorage.getItem(TOKEN_KEY)) return true;
    else return false;
  }


}
