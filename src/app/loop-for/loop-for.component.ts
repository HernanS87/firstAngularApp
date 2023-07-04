import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-loop-for',
  templateUrl: './loop-for.component.html',
  styleUrls: ['./loop-for.component.css']
})
export class LoopForComponent {

  people: Person[] = [
    {name: "Jose", age:35},
    {name: "Karla", age:24},
    {name: "Julieta", age:27},
    {name: "Jony", age:31}
  ];


}
