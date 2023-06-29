import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

showByConsole(name: any) {
console.log(name.value);
name.value = "";
}

}
