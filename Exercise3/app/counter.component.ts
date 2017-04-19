import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
 <input value="-" type="button" (click)="decrease()" (click)="updateCounterChange()"  /> {{counterValue}}       <input  value="+" type="button" (click)="increase()" (click)="updateCounterChange()" />
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input('counter') counterValue: number;
  @Output() counterChange: EventEmitter<number>;
  constructor() {
    this.counterValue = 0
    this.counterChange = new EventEmitter();
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

  updateCounterChange(): void {
    this.counterChange.emit(this.counterValue)
  }


}
