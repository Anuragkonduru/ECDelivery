import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor() {}
  // openModel(CustomComponent?: Component)
  // {
  //   this.modalService.openModel(this..container, CustomComponent);
  // }
  // closeModel() {
  //   this['modalService'].closeModel(this.container);
  // }
}
