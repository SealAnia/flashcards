import { Component, Input, NgModule, Output } from '@angular/core';
import { Card } from '../model/card';
import { NgFor } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [NgFor, FormsModule, ItemComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})

export class CardFormComponent {

  @Input() public cards : Array<Card> = [];
  
  public card! : Card;

  constructor() {
    this.card = new Card('', '', '');
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