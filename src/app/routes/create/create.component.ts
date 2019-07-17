import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  f = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private elt: ElementRef) { }

  ngOnInit() {
    // set the focus on the input field.
    this.elt.nativeElement.querySelector('input').focus();
  }

  submit() {
    console.log('submit');
  }

}
