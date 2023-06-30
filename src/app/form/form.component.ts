import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
openAlert: boolean = false;
nameValue: string = "";

showByConsole(name: any) {
  if (name.value){
    this.nameValue= name.value;
    console.log(this.nameValue);
    name.value = "";
    this.openAlert = true;
  }
}
}
