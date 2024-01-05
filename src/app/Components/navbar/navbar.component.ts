import { Component } from '@angular/core';
import { faCartPlus, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faCartPlus = faCartPlus;
  faStore = faStore;

  constructor() {}
}
