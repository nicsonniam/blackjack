import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-game-blackjack',
  templateUrl: './game-blackjack.component.html',
  styleUrls: ['./game-blackjack.component.css']
})
export class GameBlackjackComponent implements OnInit {
  difficulty: string;
  bjflag: boolean = false;
  twoAflag: boolean = false;
  cardDrawCount: number = 2;
  standFlag: boolean = false;
  buyin: number;
  house: number;
  cards: Card[]=[];
  cardsDeal: Card[]=[];
  cards1: Card[]=[];
  cards2: Card[]=[];
  cards3: Card[]=[];
  cards4: Card[]=[];
  cards5: Card[]=[];
  cards1Deal: Card[]=[];
  cards2Deal: Card[]=[];
  cards3Deal: Card[]=[];
  cards4Deal: Card[]=[];
  cards5Deal: Card[]=[];
  deck: Card[] = [];
  handValue: number;
  bustFlag: boolean;
  twentyoneFlag: boolean;
  constructor() {
    this.newDeck(); 
    this.dealCards();
    this.handValue=this.cards1[0].value+this.cards2[0].value
    if(this.handValue==21){
      this.bjflag=true;
    }
    if(this.handValue==22){
      this.twoAflag=true;
    }
  }
  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
  ngOnInit(): void {
  }
  reset(): void{
    this.bjflag = false;
    this.twoAflag=false;
    this.bustFlag=false;
    this.twentyoneFlag=false;
    this.cardDrawCount=2;
    this.cards1 = [];
    this.cards2 = [];
    this.cards3 = [];
    this.cards4 = [];
    this.cards5 = [];
    this.cards1Deal = [];
    this.cards2Deal = [];
    this.cards3Deal = [];
    this.cards4Deal = [];
    this.cards5Deal = [];
    this.newDeck();
    this.dealCards();
    this.handValue=this.cards1[0].value+this.cards2[0].value
    if(this.handValue==21){
      this.bjflag=true;
    }
    if(this.handValue==22){
      this.twoAflag=true;
    }
  }
  dealCards():void{
    var drawnCard = this.drawACard(); 
    this.cards1.push(drawnCard);
    this.cards.push(drawnCard);
    var drawnCard = this.drawACard(); 
    this.cards2.push(drawnCard);
    this.cards.push(drawnCard);
    var drawnCard = this.drawACard(); 
    this.cards1Deal.push(drawnCard);
    this.cardsDeal.push(drawnCard);
    var drawnCard = this.drawACard(); 
    this.cards2Deal.push(drawnCard);
    this.cardsDeal.push(drawnCard);
  }
  drawYourCard(): void{
    if(this.cardDrawCount==2){
      var drawnCard = this.drawACard(); 
      if(drawnCard.value==11){
        if(this.handValue<=11){
          this.handValue=this.handValue+10;
        }else{
          this.handValue=this.handValue+1
        }
      }else{
        this.handValue=this.handValue+drawnCard.value
      }
      this.cards3.push(drawnCard);
      this.cards.push(drawnCard);
    }else if(this.cardDrawCount==3){
      var drawnCard = this.drawACard();
      if(drawnCard.value==11){
        this.handValue=this.handValue+1
      }else{
        this.handValue=this.handValue+drawnCard.value
      } 
      this.cards4.push(drawnCard);
      this.cards.push(drawnCard);
    }else if(this.cardDrawCount==4){
      var drawnCard = this.drawACard(); 
      if(drawnCard.value==11){
        this.handValue=this.handValue+1
      }else{
        this.handValue=this.handValue+drawnCard.value
      }
      this.cards5.push(drawnCard);
      this.cards.push(drawnCard);
    }else{
    }
    if(this.handValue>21){
      this.bustFlag=true;
    }
    if(this.handValue==21){
      this.twentyoneFlag=true;
    }
    console.log(this.handValue);
    this.cardDrawCount++;
  }
  drawACard(): Card{
    var drawNo = this.randomInt(0,51);
    var drawCard=this.deck[drawNo];
    this.deck.splice(drawNo,1);
    return drawCard;
  }
  newDeck(): void{
    for(var i=2;i<11;i++){
      var card1 = new Card();
      card1.value=i;
      card1.suit="spades";
      card1.name=i.toString().concat("spades");
      this.deck.push(card1); 
    }
    for(var i=2;i<11;i++){
      var card1 = new Card();
      card1.value=i;
      card1.suit="diamonds";
      card1.name=i.toString().concat("diamonds");
      this.deck.push(card1);
    }
    for(var i=2;i<11;i++){
      var card1 = new Card();
      card1.value=i;
      card1.suit="hearts";
      card1.name=i.toString().concat("hearts");
      this.deck.push(card1);
    }
    for(var i=2;i<11;i++){
      var card1 = new Card();
      card1.value=i;
      card1.suit="clubs";
      card1.name=i.toString().concat("clubs");
      this.deck.push(card1);
    }

    var card1 = new Card();
    card1.value=11;
    card1.suit="ace";
    card1.name="acespades";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=11;
    card1.suit="ace";
    card1.name="acediamonds";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=11;
    card1.suit="ace";
    card1.name="aceclubs";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=11;
    card1.suit="ace";
    card1.name="acehearts";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;

    card1.suit="jack";
    card1.name="jackspades";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;
    card1.suit="jack";
    card1.name="jackdiamonds";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;
    card1.suit="jack";
    card1.name="jackhearts";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;
    card1.suit="jack";
    card1.name="jackclubs";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;

    card1.suit="queen";
    card1.name="queenspades";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;
    card1.suit="queen";
    card1.name="queendiamonds";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;
    card1.suit="queen";
    card1.name="queenhearts";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;
    card1.suit="queen";
    card1.name="queenclubs";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;

    card1.suit="king";
    card1.name="kingspades";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;
    card1.suit="king";
    card1.name="kingdiamonds";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;
    card1.suit="king";
    card1.name="kinghearts";
    this.deck.push(card1);
    var card1 = new Card();
    card1.value=10;
    card1.suit="king";
    card1.name="kingclubs";
    this.deck.push(card1);
  }
}

