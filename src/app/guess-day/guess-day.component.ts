import { Component } from '@angular/core';

@Component({
  selector: 'app-guess-day',
  templateUrl: './guess-day.component.html',
  styleUrls: ['./guess-day.component.css']
})
export class GuessDayComponent {

  day?:number;

  guessDay(){
    this.day = Math.floor(Math.random() * 8) + 1;
    console.log(this.day)
  }
}
