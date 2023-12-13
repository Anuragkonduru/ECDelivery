import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme!: boolean;
  constructor() {
    this.isDarkTheme = true;
    this.updateTheme();
  }
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.updateTheme();
  }

  private updateTheme(): void {
    document.documentElement.classList.toggle('dark', this.isDarkTheme);
  }

  isDarkMode(): boolean {
    return this.isDarkTheme;
  }
}
