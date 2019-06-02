import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SoccerComponent } from '../soccer/soccer.component';
import { SoccerDetailsComponent } from '../soccer-details/soccer-details.component';
import { AddSoccerComponent } from '../add-soccer/add-soccer.component';
const routes: Routes = [
  {
    path: 'soccers',
    component: SoccerComponent
  },
  {
    path: 'soccer/add',
    component: AddSoccerComponent
  },
  {
    path: 'soccers/:id',
    component: SoccerDetailsComponent
  },
  {
    path: '',
    redirectTo: 'soccers',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
