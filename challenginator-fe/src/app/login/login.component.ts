import { Component, OnInit } from '@angular/core';
import { AuthService} from "../_services/auth.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {AppComponent} from "../app.component";
import {root} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  jwt: string | null = '';
  userId: string | null = '';



  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router, private appComponent: AppComponent) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()){
    this.isLoggedIn = true;
    this.jwt = this.tokenStorage.getToken();
  } }

  onSubmit(): void{
    const {email,password} = this.form;

    this.authService.login(email, password).subscribe(
      data => {

        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveUserId(data.userId)
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //this.reloadPage();
        this.appComponent.login();
        this.router.navigate(['dashboard']);
      },
      err => {
        this.isLoginFailed = true;
        this.errorMessage = "Problemi con il servizio di autenticazione";
        this.errorMessage = err.error.message();
      }
    );
  }

  reloadPage(): void{
    window.location.reload();
  }

}
