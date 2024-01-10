import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetail } from 'src/app/Interfaces/ProductDetail';
import { HomedetailsService } from 'src/app/Services/homedetails.service';
import { ModalService } from 'src/app/Services/modal.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent  {
  discountedPrice: any[] = [];
  @Input() parentContainer!: ViewContainerRef;
  @ViewChild('myinput') myInputField: ElementRef | undefined;
  ngAfterViewInit() {
    if (this.myInputField) {
      this.myInputField.nativeElement.focus();
    }
  }
  queryText: any = '';
  searchValue: string = '';

  SearchItems: ProductDetail[] = [];

  constructor(
    private details: HomedetailsService,
    private modalService: ModalService,
    private parentComponent: AppComponent,
    private router: Router
  ) {
    this.details.GetApiDetails().subscribe((res) => {
      console.log(res);
      this.SearchItems = [...res];
    });
    this.queryText = modalService.searchValue;
    console.log(this.queryText);

     this.SearchItems.forEach((element) => {
       const dealprice: number =
         element.price - (element.price * element.discountPercentage) / 100;
       console.log(dealprice);
       this.discountedPrice.push(dealprice);
     });
  }
  selectedProduct(event: Event, id: number) {
    this.modalService.closeModel(this.parentComponent.container);
    this.router.navigate(['/product/' + id]);


  }
  closeModel(event: Event) {
    if (event.target === event.currentTarget) {
      this.modalService.searchValue = '';
      this.searchValue = '';
      this.modalService.closeModel(this.parentComponent.container);
    }
  }
}
