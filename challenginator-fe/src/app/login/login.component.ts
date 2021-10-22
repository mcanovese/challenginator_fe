import { Component, OnInit } from '@angular/core';
import { AuthService} from "../_services/auth.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {HttpHeaders} from "@angular/common/http";

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

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

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
        this.reloadPage();
      },
      err => {
        this.isLoginFailed = true;
        this.errorMessage = "problems with auth provider";
        this.errorMessage = err.error.message();
      }
    );
  }

  reloadPage(): void{
    window.location.reload();
  }

}
