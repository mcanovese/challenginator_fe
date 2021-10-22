import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Challenge} from "../../model/challenge.model";
import {ChallengeService} from "../../service/challenge.service";
import {waitForAsync} from "@angular/core/testing";


@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})

  export class ChallengeListComponent implements OnInit {

    @Input() challengeType: string | undefined;
    userId: string|null = window.sessionStorage.getItem("user-id");

    challengeList:Challenge[] = [];


  constructor(private challengeService: ChallengeService) {}


  ngOnInit(): void {
    if(this.challengeType == 'incoming')   this.loadChallengeIncoming();
    if(this.challengeType == 'outcoming') this.loadChallengeOutcoming();
    if(this.challengeType == 'evaluate')  this.loadChallengeToEvaluate();
  }


  loadChallengeIncoming() {
    this.challengeService.getChallenge().subscribe((challenges) =>{
      this.challengeList = challenges.filter(element=>
        element.challenger.toString() != this.userId);
    })
  }

  loadChallengeOutcoming() {
    this.challengeService.getChallenge().subscribe((challenges) =>{
      this.challengeList = challenges.filter(element=>
        element.challenger.toString() == this.userId);
    })
  }


  loadChallengeToEvaluate() {
    this.challengeService.getChallengeToEvaluate().subscribe((challenges) =>{
      this.challengeList = challenges.filter(element=>
      element.challenger.toString() != this.userId);
    })
  }



}
