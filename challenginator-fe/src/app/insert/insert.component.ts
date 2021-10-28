import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";
import {ChallengeService} from "../service/challenge.service";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  userlist: any[] = [];
  userId: string|null = window.sessionStorage.getItem("user-id");

  form: any = {
    challenged: null,
    title: null,
    description:null,
    deadline: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private challengeService: ChallengeService, private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserList();
  }

  onSubmit(): void{

    const {challenged,title,description,deadline} = this.form;

    console.log("submit");

    this.challengeService.insertChallenge(title,description,deadline,challenged).subscribe(
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

  //carico dati per la select tranne quello mio
  loadUserList(): void {
    this.userService.getListUser().subscribe(
      data=>{
        this.userlist = data.filter((data: { id: string | null; }) => data.id != this.userId);
      },
      error => {
        console.log ("error in get data user");
      }

    )

  }


}
