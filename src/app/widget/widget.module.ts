import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from './focus.directive';
import { TimerComponent } from './timer/timer.component';
import { FormatTimePipe } from './format-time.pipe';



@NgModule({
  declarations: [FocusDirective, TimerComponent, FormatTimePipe],
  imports: [
    CommonModule
  ],
  exports: [FocusDirective, TimerComponent, FormatTimePipe]
})
export class WidgetModule { }
