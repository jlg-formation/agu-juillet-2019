import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  f = new FormGroup({
    name: new FormControl('toto', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit');
    this.router.navigateByUrl('/setup');
  }

}
