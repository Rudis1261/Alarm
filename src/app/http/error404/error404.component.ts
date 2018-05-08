import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `<h1>404 Page not found</h1>`,
  styles: [`
    :host {
      background: #bada55;
    }
  `]
})
export class Error404Component implements OnInit {
  constructor() { }
  ngOnInit() {  }
}
