import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuizzService } from './quizz.service';




@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {

  constructor(private http: HttpClient) {
    super();
    this.http.get('http://localhost:3000/ws/quizz').subscribe({
      next: x => { console.log('next', x); },
      error: e => console.error('error', e),
      complete: () => console.log('complete'),
    });
  }
}
