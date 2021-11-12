import { Component, OnInit } from '@angular/core';
import { faBalanceScale, faSignOutAlt, faSignInAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faBalanceScale = faBalanceScale;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
