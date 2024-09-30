import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { ColorsComponent } from './shared/colors/colors.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { PayerComponent } from './payer/payer.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchbarComponent,
    ColorsComponent,
    CardPageComponent,
    CartPageComponent,
    NotFoundComponent,
    AboutUsComponent,
    LoginComponent,
    PayerComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
