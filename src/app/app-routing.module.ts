import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameBlackjackComponent } from './game-blackjack/game-blackjack.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blackjack', component: GameBlackjackComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [GameBlackjackComponent]