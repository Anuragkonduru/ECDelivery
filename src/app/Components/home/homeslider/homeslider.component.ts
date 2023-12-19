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
      // transition('void => left', [
      //   style({ transform: 'translateX(100%)' }),
      //   animate('300ms ease-out'),
      // ]),
      // transition('left => void', [
      //   animate('300ms ease-out', style({ transform: 'translateX(-100%)' })),
      // ]),
      // transition('void => right', [
      //   style({ transform: 'translateX(-100%)' }),
      //   animate('300ms ease-out'),
      // ]),
      // transition('right => void', [
      //   animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
      // ]),
      // transition('left => right', [
      //   style({ transform: 'translateX(-100%)' }),
      //   animate('300ms ease-out'),
      // ]),
      // transition('right => left', [
      //   style({ transform: 'translateX(100%)' }),
      //   animate('300ms ease-out'),
      // ]),
      // transition('left => left', [
      //   style({ transform: 'translateX(100%)' }),
      //   animate('300ms ease-out'),
      // ]),
      // transition('right => right', [
      //   style({ transform: 'translateX(-100%)' }),
      //   animate('300ms ease-out'),
      // ]),
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
      url: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1647221598398-934ed5cb0e4f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1542992015-4a0b729b1385?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
