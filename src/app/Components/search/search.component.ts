import { Component } from '@angular/core';
import { ProductDetail } from 'src/app/Interfaces/ProductDetail';
import { HomedetailsService } from 'src/app/Services/homedetails.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  queryText: any = '';
  SearchItems: ProductDetail[] = [];

  constructor(private details: HomedetailsService) {
    const Result = this.details.GetApiDetails().subscribe((res) => {
      console.log(res);
      this.SearchItems = [...res];
    });
    console.log(this.queryText);
  }
}
