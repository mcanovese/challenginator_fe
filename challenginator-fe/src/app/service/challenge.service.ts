import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

import { Challenge} from "../model/challenge.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private apiUrl = "http://localhost:8081/challenge/";

  constructor(private http:HttpClient) { }

  getChallenge(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.apiUrl);
  }

  getChallengeToEvaluate(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.apiUrl+"evaluate");
  }


  challengeControlRequest(challengeId:number,reqAccept?:boolean,reqGiveup?:boolean,reqRefuse?:boolean,reqComplete?:boolean): Observable<any> {
    return this.http.post<any>(this.apiUrl+"control", { challengeId: challengeId, accept: reqAccept ,giveup: reqGiveup,
              refuse: reqRefuse, complete:reqComplete });
  }

  evaluateChallenge(challengeId:number,result:string): Observable<any> {
    return this.http.post<any>(this.apiUrl+"evaluate", { challengeId: challengeId, result: result});
  }





}
