import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCard } from 'src/app/Interfaces/ProductCard';
import { HomedetailsService } from 'src/app/Services/homedetails.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit {
  homeDetails!: ProductCard[];
  constructor(private details: HomedetailsService, private router: Router) {
    const Result = this.details.GetApiDetails().subscribe((res) => {
      this.homeDetails = res;
    });
    console.log(Result);
  }
  ngOnInit(): void {}
  selectedProduct(event: Event, id: number) {
    console.log(event);
    console.log(id);
    this.router.navigate(['/product/' + id]);
  }
}
