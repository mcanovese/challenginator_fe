import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.css']
})
export class ChallengeItemComponent implements OnInit {

  @Input('incomingdata') data: any[] = [];

   id: any = this.data;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
