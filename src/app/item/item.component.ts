import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Card } from '../model/card';
import { NgFor, NgIf } from '@angular/common';

import { FormsModule, NgModel } from '@angular/forms';

//import { AnswerFormComponent } from '../answer-form/answer-form.component';

@Component({
  selector: 'app-item',
  standalone: true, 
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  public cards! : Array<Card>;
  public counter : number = 0;

  ngOnInit() {
    this.cards = [new Card('Question first' + this.counter, 'Answer first', ''), 
    new Card('Question second' + this.counter, 'Answer second', ''), 
    new Card('Question third' + this.counter, 'Answer third', ''), 
    new Card('Question forth' + this.counter, 'Answer forth', ''), 
    new Card('Question fifth' + this.counter, 'Answer fifth', '')
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

  //NEW
  checkAnswer() {
    console.log(this.cards[this.counter].answer);
    console.log(this.cards[this.counter].answerFromUser);
    console.log(this.cards[this.counter].answer == this.cards[this.counter].answerFromUser);
  }

}
