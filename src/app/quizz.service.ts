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
}
