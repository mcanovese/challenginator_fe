import { Component, OnInit } from '@angular/core';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
