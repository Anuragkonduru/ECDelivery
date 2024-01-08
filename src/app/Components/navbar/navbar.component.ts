import { Component } from '@angular/core';
import { faCartPlus, faStore } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/Services/cart.service';
import { ModalService } from 'src/app/Services/modal.service';
import { AppComponent } from 'src/app/app.component';

import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faCartPlus = faCartPlus;
  faStore = faStore;
  CartItemsCount: number = 0;
  queryText: string = '';

  constructor(
    private cartService: CartService,
    private parentComponent: AppComponent,

    private modelService: ModalService
  ) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((Items) => {
      this.CartItemsCount = Items.length;
    });
  }
  async openSearch() {
    this.modelService.openModel(
      this.parentComponent.container,
      SearchComponent
    );
  }
}
