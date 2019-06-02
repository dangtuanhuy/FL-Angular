import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SoccerComponent } from './soccer/soccer.component';
import { AddSoccerComponent } from './add-soccer/add-soccer.component';
import { SoccerDetailsComponent } from './soccer-details/soccer-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SoccerComponent,
    AddSoccerComponent,
    SoccerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
