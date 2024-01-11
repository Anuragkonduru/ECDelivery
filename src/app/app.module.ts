import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DealsComponent } from './Components/home/deals/deals.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ThemeComponent } from './Components/theme/theme.component';
import { ThemeService } from './Services/theme.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HomesliderComponent } from './Components/home/homeslider/homeslider.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { SearchComponent } from './Components/search/search.component';
import { SearchPipe } from './search.pipe';

import { ModalService } from './Services/modal.service';
import { CatagoriesComponent } from './Components/catagories/catagories.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeComponent,
    HomeComponent,
    DealsComponent,
    HomesliderComponent,
    ProductPageComponent,
    NotFoundComponent,
    CartComponent,
    CheckoutComponent,
    SearchPipe,
    SearchComponent,
    CatagoriesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [ThemeService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
