import {Component, Injectable, OnInit} from '@angular/core';
import {TokenStorageService} from "../../_services/token-storage.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})


export class ChallengeListComponent implements OnInit {
   sub: any[] = [];

  constructor(private httpClient: HttpClient) {}




  ngOnInit(): void {
     this.getChallenge().subscribe(
      data => {
        this.sub = data;
        console.log(this.sub);
      },
      err => {
        console.log("error challenge");
      }
    );



  }

  ngAfterViewInit(): void {

  }



 getChallenge(): Observable<any> {
 return this.httpClient.get('http://localhost:8081/challenge');

}

}
