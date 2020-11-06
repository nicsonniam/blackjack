import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameBlackjackComponent } from './game-blackjack/game-blackjack.component';
import { MatRippleModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { RouterOutlet } from '@angular/router';

@NgModule({
  exports: [
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    routingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatButtonModule, 
    BrowserAnimationsModule,
    MatRippleModule,
    MatCardModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
