import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ThemeComponent } from './Components/theme/theme.component';
import { ThemeService } from './Services/theme.service';
import { HomeComponent } from './Components/home/home.component';
import { DealsComponent } from './Components/home/deals/deals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomesliderComponent } from './Components/home/homeslider/homeslider.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeComponent,
    HomeComponent,
    DealsComponent,
    HomesliderComponent,
    ProductPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent,]
})
export class AppModule { }