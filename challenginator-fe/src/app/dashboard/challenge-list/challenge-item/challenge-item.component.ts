import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output("loadAllList") loadAllList: EventEmitter<any> = new EventEmitter();

  // suddivisione del tipo incoming/outcoming/evaluating
  @Input() challengeType : String|undefined;
  userId: string|null = window.sessionStorage.getItem("user-id");


   constructor (private challengeService:ChallengeService) {}

   ngOnInit(): void {
   }

  // l'utente accetta la sfida
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

   // challenge accettata, l'utente può decidere di arrendersi
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

   //lo sfidato decise di rifiutare la challenge che gli è proposta
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

  //imposta la challenge come completata, invocato da sfidato che ha accettato la challenge
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

  // quando una challenge è valutabile, dichiara successo
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

  //quando una challenge è valutabile, dichiara  fallimento
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

  //utente che ha creato la challenge può decidere di cancellarla, prima che questa venga accettata dallo sfidato
  delete(): void {
     this.challengeService.deleteChallenge(this.challengeItem.id).subscribe(
       (data:any)=> {
         if (data == "OK") {
           this.loadAllList.emit();
         }
       },
         (error)=>{
          console.log(error);
         }
     )
  }





}
