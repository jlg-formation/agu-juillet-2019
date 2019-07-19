import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from './focus.directive';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [FocusDirective, TimerComponent],
  imports: [
    CommonModule
  ],
  exports: [FocusDirective, TimerComponent]
})
export class WidgetModule { }
