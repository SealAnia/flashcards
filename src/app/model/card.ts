export class Card {

    answered: boolean = false;

    //answerFromUser : string = ''
    
    constructor(
        public question: string,
        public answer: string,
        public answerFromUser : string
    ) {}

    checkAnswer(): boolean {
        this.question == this.answer;
        return this.answered = true;
    }

}