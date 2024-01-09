import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { CatagoriesComponent } from './Components/catagories/catagories.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'product/:id', component: ProductPageComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
  { path: 'checkout', component: CheckoutComponent, pathMatch: 'full' },
  { path: 'search', component: SearchComponent, pathMatch: 'full' },
  { path: 'catogory', component: CatagoriesComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
