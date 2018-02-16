import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
  <li><a routerLink="/">Pääsivu</a></li>
  <li><a routerLink="/about">Tietoja sovelluksesta</a></li>
  </ul>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent  { 

}
