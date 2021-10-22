import { Component, OnInit } from '@angular/core';
import { AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    email: null,
    name: null,
    surname:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(): void{
    const {email,name,surname,password} = this.form;

    this.authService.register(email,name,surname,password).subscribe(
      data=>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err=>{
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }




}
