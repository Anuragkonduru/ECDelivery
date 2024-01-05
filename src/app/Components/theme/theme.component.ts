import { Component } from '@angular/core';
import { ThemeService } from 'src/app/Services/theme.service';
import {  faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  faSun = faSun;
  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
