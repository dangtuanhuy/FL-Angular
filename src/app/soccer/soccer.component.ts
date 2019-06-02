import { Component, OnInit } from '@angular/core';
import { Soccer } from '../soccer';
import { SoccerService } from '../soccer.service';
@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {

  constructor(private soccerService: SoccerService) { }
  [x: string]: any;

  soccers: Soccer[];
  rows = [];
  ngOnInit() {
    this.getSoccers();
    this.rows = this.soccers;
  }
  getSoccers() {
    return this.soccerService.getSoccers()
      .subscribe(
        soccers => {
          this.soccers = soccers;
          this.rows = soccers;
          console.log(this.rows);
        }
      );
  }
}
