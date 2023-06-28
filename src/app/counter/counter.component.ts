/* En Angular, el EVENT BINDING es un mecanismo que permite asociar un evento específico, como un clic del mouse o una pulsación de tecla, con un método o una función en el componente correspondiente. Permite capturar y manejar eventos generados por el usuario o por otros componentes. */

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 0;

  add() {
    this.counter++
  }

  subtract(){
    this.counter--
  }

  ejecutaConsole($event: any){
    console.log($event.target.innerText)
    console.log($event.target.value)
  }
}
