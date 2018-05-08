import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
<nav class="nav">
  <a class="btn" routerLink="/home" routerLinkActive="active">Home</a>
  <a class="btn" routerLink="/zones" routerLinkActive="active">Zones</a>
  <a class="btn" routerLink="/schedule" routerLinkActive="active">Schedule</a>
  <a class="btn" routerLink="/stats" routerLinkActive="active">Stats</a>
  <a class="btn" routerLink="/tools" routerLinkActive="active">Tools</a>
</nav>`,
  styles: [`
    nav {
      display: block;
      width: 100%;
      margin-bottom: 15px;
    }
  `]
})
export class NavBarComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
