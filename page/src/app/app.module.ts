import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPageModule } from './view-page/view-page.module';
import { BuildingModule } from './building/building.module';
import { NotFoundModule } from './not-found/not-found.module';
import { BackgroundStarsModule } from './background-stars/background-stars.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewPageModule,
    BuildingModule,
    BackgroundStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
