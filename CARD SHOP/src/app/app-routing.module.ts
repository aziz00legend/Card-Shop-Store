import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AboutUsComponent } from './about-us/about-us.component'; 
import { LoginComponent } from './login/login.component';
import { PayerComponent } from './payer/payer.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:searchTerm',
    component: HomeComponent,
  },
  {
    path: 'color/:color',
    component: HomeComponent,
  },
  {
    path: 'card/:id',
    component: CardPageComponent,
  },
  {
    path: 'cart-page',
    component: CartPageComponent,
  },
  {
    path: 'about', // Add a new route for the About Us page
    component: AboutUsComponent,
  },
  { path: 'login',
   component: LoginComponent },
   { path: 'payer', 
   component: PayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
