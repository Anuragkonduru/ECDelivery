import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

interface slide {
  url: string;
}

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('* => right', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out'),
      ]),
      transition('* => left', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out'),
      ]),
    ]),
  ],
})
export class HomesliderComponent {
  slides: slide[] = [
    {
      url: 'assets/images/1.jpg',
    },
    {
      url: 'assets/images/2.jpg',
    },
    {
      url: 'assets/images/3.jpg',
    },
  ];
  currentIndex = 0;
  currentUrl = this.slides[0].url;
  slideDirection: 'void' | 'left' | 'right' = 'left';
  constructor() {}

  slideLeft() {
    this.slideDirection = this.slideDirection === 'right' ? 'left' : 'right';

    this.currentIndex =
      this.currentIndex === 0
        ? this.slides.length - 1
        : (this.currentIndex - 1) % this.slides.length;
    this.currentUrl = this.slides[this.currentIndex].url;
  }
  slideRight() {
    this.slideDirection = this.slideDirection === 'left' ? 'right' : 'left';
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.currentUrl = this.slides[this.currentIndex].url;
  }
  getcurrentUrl() {
    return `url(${this.currentUrl})`;
  }
}
