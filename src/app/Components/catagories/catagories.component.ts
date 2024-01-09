import { Component } from '@angular/core';
import { Catagories } from 'src/app/Interfaces/Catagories';
import { HomedetailsService } from 'src/app/Services/homedetails.service';
import { ModalService } from 'src/app/Services/modal.service';
import { AppComponent } from 'src/app/app.component';

import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css'],
})
export class CatagoriesComponent {
  groupedCatrogories: Catagories[] = [];
  constructor(private productService: HomedetailsService,
      private parentComponent: AppComponent,
    private modelService: ModalService) {
    productService.GetCatogories();
    this.productService.GetCatogories().subscribe((res) => {
      this.groupedCatrogories = res;
    });
  }
  async searchCatogory(catogory: string) {
    this.modelService.searchValue = catogory;
    this.modelService.openModel(
      this.parentComponent.container,
      SearchComponent
    );
  }
}
