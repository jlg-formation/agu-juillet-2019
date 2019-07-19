import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const minute = Math.floor(value / 60) + '';
    const second = value % 60 + '';
    return `${minute.padStart(2, '0')}:${second.padStart(2, '0')}`;
  }

}
