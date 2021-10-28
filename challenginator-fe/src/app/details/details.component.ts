import {Component, Inject, InjectionToken, Input, OnInit} from '@angular/core';
import {Challenge} from "../model/challenge.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ChallengeService} from "../service/challenge.service";
import {UserService} from "../_services/user.service";
import {DatePipe} from "@angular/common";
import {Timestamp} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  challenge: Challenge | undefined;
  userList:any[] = [];
  challengedData: any;
  challengerData: any;
  valutatorData: any;
  creationDate: any;
  acceptanteDate: any;
  overtime: boolean = false;

  userId: string|null = window.sessionStorage.getItem("user-id");

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengeService: ChallengeService,
    private userService: UserService,


  ) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['challengeId'];

    this.challengeService.getChallengeById(id).subscribe(
      data=>{
        this.challenge = data;
        this.loadData();
      }
    );


  }

  loadData(): void {
    this.userList = this.userService.getUserList();
      this.challengedData = this.userList.find(element => element.id.toString() == this.challenge!.challenged.toString());
      this.challengerData = this.userList.find(element => element.id.toString() == this.challenge!.challenger.toString());
      this.valutatorData = this.userList.find(element => element.id.toString() == this.challenge!.evaluator.toString());
      this.creationDate = new Date(this.challenge!.timestamp_creation);
      this.acceptanteDate = new Date(this.challenge!.timestamp_acceptance);

      let date = new Date();
      if(this.challenge?.status!='PENDING' && date.getDate()>this.acceptanteDate.getDate()+this.challenge?.deadline) this.overtime = true;


  }

  // quando una challenge è valutabile, dichiara successo
  evaluateSuccess(): void{
    if(this.challenge)
    this.challengeService.evaluateChallenge(this.challenge.id,'SUCCESS').subscribe(
      (data:any)=>{
        this.challenge = data;
        console.log("success");
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //quando una challenge è valutabile, dichiara  fallimento
  evaluateFail(): void{
    if(this.challenge){
    this.challengeService.evaluateChallenge(this.challenge.id,'FAIL').subscribe(
      (data:any)=>{
        this.challenge = data;
        console.log("failed");
      },
      (error)=>{
        console.log(error);
      }
    )}
  }

  // challenge accettata, l'utente può decidere di arrendersi
  giveUp(): void {
    if(this.challenge){
    this.challengeService.challengeControlRequest(this.challenge.id,false,true,false).subscribe(
      (data:any)=> {
        this.challenge = data;
      },
      (error)=>{
        console.log(error);
      }
    );}
  }

  //lo sfidato decise di rifiutare la challenge che gli è proposta
  refuseChallenge(): void {
    if(this.challenge){
    this.challengeService.challengeControlRequest(this.challenge.id,false,false,true).subscribe(
      (data:any)=> {
        this.challenge = data;
      },
      (error)=>{
        console.log(error);
      }
    );}
  }

  //imposta la challenge come completata, invocato da sfidato che ha accettato la challenge
  completeChallenge(): void {
    if(this.challenge){
    this.challengeService.challengeControlRequest(this.challenge.id,false,false,false,true).subscribe(
      (data:any)=> {
        this.challenge = data;
      },
      (error)=>{
        console.log(error);
      }
    );}
  }


}
