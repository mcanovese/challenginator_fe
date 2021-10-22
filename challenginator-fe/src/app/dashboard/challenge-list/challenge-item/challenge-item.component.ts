import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from "../../../model/challenge.model";
import {ChallengeService} from "../../../service/challenge.service";
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.css']
})
export class ChallengeItemComponent implements OnInit {


  @Input() challengeItem!: Challenge ;
  @Input() challengeType : String|undefined;
  userId: string|null = window.sessionStorage.getItem("user-id");


   constructor (private challengeService:ChallengeService) {}

   ngOnInit(): void {
   }


   acceptChallenge(): void {

     this.challengeService.challengeControlRequest(this.challengeItem.id,true,false,false).subscribe(
       (data:any)=> {
        this.challengeItem = data;
       },
     (error)=>{
         console.log(error);
     }
     );
   }

    giveUp(): void {
    this.challengeService.challengeControlRequest(this.challengeItem.id,false,true,false).subscribe(
      (data:any)=> {
        this.challengeItem = data;
      },
      (error)=>{
        console.log(error);
      }
    );
   }

  refuseChallenge(): void {
    this.challengeService.challengeControlRequest(this.challengeItem.id,false,false,true).subscribe(
      (data:any)=> {
        this.challengeItem = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  completeChallenge(): void {
    this.challengeService.challengeControlRequest(this.challengeItem.id,false,false,false,true).subscribe(
      (data:any)=> {
        this.challengeItem = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  evaluateSuccess(): void{
    this.challengeService.evaluateChallenge(this.challengeItem.id,'SUCCESS').subscribe(
      (data:any)=>{
        this.challengeItem = data;
        console.log("success");
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  evaluateFail(): void{
    this.challengeService.evaluateChallenge(this.challengeItem.id,'FAIL').subscribe(
      (data:any)=>{
        this.challengeItem = data;
        console.log("failed");
      },
      (error)=>{
        console.log(error);
      }
    )
  }





}
