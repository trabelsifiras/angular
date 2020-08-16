import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import {LEADERS} from '../shared/leaders';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  leader:Leader;
  leaders:Leader[]=LEADERS;
  constructor(private leaderservice:LeaderService) { }

  ngOnInit() {
    this.leaders=this.leaderservice.getLeaders();
  }

}
