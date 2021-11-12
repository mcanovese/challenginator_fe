import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

import { Challenge} from "../model/challenge.model";
import {map} from "rxjs/operators";

const httOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private apiUrl = "http://localhost:8081/challenge/";

  constructor(private http:HttpClient) { }

  insertChallenge(title:string, description:string, deadline:number, idChallenged: number): Observable<any> {
    return this.http.post(this.apiUrl,{title,description,deadline,idChallenged}, httOptions);
  }

  getChallenge(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.apiUrl);
  }

  getChallengeById(challengeId: number):Observable<Challenge>{
    return this.http.get<Challenge>(this.apiUrl + challengeId);
  }

  getChallengeToEvaluate(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.apiUrl+"evaluate");
  }

  deleteChallenge(challengeId:number): Observable<any> {
    return this.http.delete(this.apiUrl+challengeId);
  }


  challengeControlRequest(challengeId:number,reqAccept?:boolean,reqGiveup?:boolean,reqRefuse?:boolean,reqComplete?:boolean): Observable<any> {
    return this.http.post<any>(this.apiUrl+"control", { challengeId: challengeId, accept: reqAccept ,giveup: reqGiveup,
              refuse: reqRefuse, complete:reqComplete });
  }

  evaluateChallenge(challengeId:number,result:string): Observable<any> {
    return this.http.post<any>(this.apiUrl+"evaluate", { challengeId: challengeId, result: result});
  }








}
