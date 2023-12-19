import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeDetails } from 'src/app/Interfaces/HomeDetails';
import { HomedetailsService } from 'src/app/Services/homedetails.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  id!: number;
  productDetail?: HomeDetails;
  constructor(
    private route: ActivatedRoute,
    private homedetailsService: HomedetailsService
  ) {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.productDetail = this.homedetailsService.getDetailsById(this.id);
  }
  ngOnInit(): void {}
}
