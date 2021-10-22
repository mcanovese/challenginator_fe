import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";
import {ChallengeService} from "../service/challenge.service";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  form: any = {
    challenged: null,
    title: null,
    description:null,
    deadline: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
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






}
