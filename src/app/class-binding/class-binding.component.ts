import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
  text_color:string = "";
  
  button_disabled:Boolean = false

  disableButtons(){
    this.button_disabled = !this.button_disabled
    console.log(this.button_disabled)
  }
}
