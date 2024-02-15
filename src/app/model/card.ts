export class Card {

    answered: boolean = false;

    constructor(
        public question: string,
        public answer: string,
        public answerFromUser : string
    ) {}

}