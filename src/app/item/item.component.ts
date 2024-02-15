import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Card } from '../model/card';
import { NgFor, NgIf } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CardFormComponent } from '../card-form/card-form.component';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-item',
  standalone: true, 
  imports: [NgFor, NgIf, FormsModule, CardFormComponent, AppComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  public cards : Array<Card> = [];
  public counter : number = 0;

  public demoCard : Card = new Card('Demo question' , 'Demo answer', 'Demo answer');

  public card! : Card;
  constructor() {
    this.card = new Card('', '', '');
  }

  ngOnInit() {
    this.cards = [
      this.demoCard
  ];
  }

  onCheckAnswer(event : any) {
    this.cards[this.counter].question = this.cards[this.counter].answer;
    this.cards[this.counter].answered = !this.cards[this.counter].answered;
    console.log(this.cards[this.counter].answer);
    console.log('Your answer ' + this.cards[this.counter].answerFromUser);
    console.log(this.cards[this.counter].answer == this.cards[this.counter].answerFromUser);
  }

  changeCard() {
    this.cards[this.counter].question = this.cards[this.counter].answer;
    this.cards[this.counter] = this.cards[this.counter++];
  }

  checkAnswer() {
    console.log(this.cards[this.counter].answer);
    console.log(this.cards[this.counter].answerFromUser);
    console.log(this.cards[this.counter].answer == this.cards[this.counter].answerFromUser);
  }

  getACardFromUser() {
    this.cards.push({
      question: this.card.question,
      answer: this.card.answer,
      answered: false, 
      answerFromUser: ""
    });
    
  }

}