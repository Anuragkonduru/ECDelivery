import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ThemeComponent } from './Components/theme/theme.component';
import { ThemeService } from './Services/theme.service';
import { HomeComponent } from './Components/home/home.component';
import { DealsComponent } from './Components/Home/deals/deals.component';

import { HomesliderComponent } from './Components/Home/homeslider/homeslider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeComponent,
    HomeComponent,
    DealsComponent,
    HomesliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
