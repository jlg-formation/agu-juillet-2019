import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {


  constructor() { }

  create(name: string) {
    const q = new Quizz();
    q.name = name;
    localStorage.setItem('current', JSON.stringify(q));
  }

  getCurrent(): Quizz {
    const str = localStorage.getItem('current');
    if (str === null) {
      return null;
    }
    const q = JSON.parse(str);
    q.__proto__ = Quizz.prototype;
    return q;
  }
}
