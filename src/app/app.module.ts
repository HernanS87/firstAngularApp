import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { FormComponent } from './form/form.component';
import { LoopForComponent } from './loop-for/loop-for.component';
import { GuessDayComponent } from './guess-day/guess-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ClassBindingComponent,
    FormComponent,
    LoopForComponent,
    GuessDayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
