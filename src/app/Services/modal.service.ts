import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  searchValue: string='';
  openModel(container: ViewContainerRef | null, CustomComponent?: any) {
    // console.log('container');
    // console.log(container);
    // console.log('CustomComponent');
    // console.log(CustomComponent);
    // console.log('creating Component');
    if (container) container.createComponent(CustomComponent);
  }
  closeModel(container: ViewContainerRef) {
    container.clear();
  }
}
