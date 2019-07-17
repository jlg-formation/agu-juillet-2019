import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {

  constructor(private elt: ElementRef) { }

  ngOnInit(): void {
    this.elt.nativeElement.focus();
  }

}
