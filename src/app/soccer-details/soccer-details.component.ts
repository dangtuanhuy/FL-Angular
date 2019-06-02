import { Component, OnInit } from '@angular/core';
import { Soccer } from '../soccer';
import { SoccerService } from '../soccer.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-soccer-details',
  templateUrl: './soccer-details.component.html',
  styleUrls: ['./soccer-details.component.css']
})
export class SoccerDetailsComponent implements OnInit {

  soccer = new Soccer();
  submitted = false;
  message: string;
  constructor(
    private soccerService: SoccerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.soccerService.getSoccer(id)
      .subscribe(soccer => this.soccer = soccer);
  }
  update(): void {
    this.submitted = true;
    this.soccerService.updateSoccer(this.soccer)
        .subscribe(result => this.message = 'Soccer Updated Successfully!');
  }

  delete(): void {
    this.submitted = true;
    this.soccerService.deleteSoccer(this.soccer.id)
        .subscribe(result => this.message = 'Soccer Deleted Successfully!');
  }

  goBack(): void {
    this.location.back();
  }

}
