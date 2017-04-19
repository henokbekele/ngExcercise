import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
 <input value="-" type="button" (click)="decrease()"  /> {{counterValue}}       <input  value="+" type="button" (click)="increase()" />
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
counterValue: number;

  constructor() {
    this.counterValue = 0

  }

  ngOnInit() {
  }

  increase() {
    this.counterValue++;
    return false;
  }
  decrease() {
    this.counterValue--;
    return false;
  }



}
