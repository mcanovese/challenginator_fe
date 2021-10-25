import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from "../model/challenge.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ChallengeService} from "../service/challenge.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  challenge: Challenge | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengeService: ChallengeService

  ) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['challengeId'];

    this.challengeService.getChallengeById(id).subscribe(
      data=>{
        this.challenge = data;
        console.log(this.challenge);
      }
    )

  }

}
