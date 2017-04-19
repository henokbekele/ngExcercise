import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentCounterValue:number;
  setComponentCounterValue(value:number)
  {
    this.ComponentCounterValue=value;
  }
  public counter=8;
  title = 'app works!';
}
