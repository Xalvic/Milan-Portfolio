import { Component } from '@angular/core';
import { slideInAnimation } from './views/route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'portfolio';

  items = [];

  constructor() {
    this.items = ['One', 'Two', 'Three'];
  }

  // push;
}
