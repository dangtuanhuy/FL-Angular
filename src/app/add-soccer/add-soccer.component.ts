import { Component, OnInit } from '@angular/core';
import { Soccer } from '../soccer';
import { SoccerService } from '../soccer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-soccer',
  templateUrl: './add-soccer.component.html',
  styleUrls: ['./add-soccer.component.css']
})
export class AddSoccerComponent implements OnInit {
  soccer = new Soccer();
  submitted = false;
  constructor(
    private soccerService: SoccerService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  newSoccer(): void {
    this.submitted = false;
    this.soccer = new Soccer();
  }

  addSoccer() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.soccer);
    this.soccerService.addSoccer(this.soccer)
      .subscribe();
  }
}
