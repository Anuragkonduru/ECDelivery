import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeDetails } from 'src/app/Interfaces/HomeDetails';
import { HomedetailsService } from 'src/app/Services/homedetails.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent {
  homeDetails!: HomeDetails[];
  constructor(private details: HomedetailsService,private router:Router) {
    this.homeDetails = details.HomeDetailsData;
  }
  selectedProduct(event: Event, id: number) {
    console.log(event);
    console.log(id);
    this.router.navigate(['/product/' + id]);
  }
}
