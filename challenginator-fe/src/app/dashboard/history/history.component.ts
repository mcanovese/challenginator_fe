import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../../service/challenge.service";
import {UserService} from "../../_services/user.service";
import {Challenge} from "../../model/challenge.model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  userId: string|null = window.sessionStorage.getItem("user-id");
  challengeList:Challenge[] = [];
  userList:any[] = [];



  constructor(private challengeService: ChallengeService, private userService: UserService) { }

  ngOnInit(): void {
    this.loadChallenge();
    this.userList = this.userService.getUserList();

  }






  loadChallenge() {
    this.challengeService.getChallenge().subscribe((challenges) =>{
      this.challengeList = challenges;
    })
  }

}
