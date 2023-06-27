import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { CartComponent } from './components/cart/cart.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { BookComponent } from './components/book/book.component';
import { ClothComponent } from './components/cloth/cloth.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'laptops', component: LaptopsComponent, canActivate: [LoginGuard] },
  { path: 'mobiles', component: MobileComponent, canActivate: [LoginGuard] },
  { path: 'books', component: BookComponent, canActivate: [LoginGuard] },
  { path: 'clothes', component: ClothComponent, canActivate: [LoginGuard] },
  { path: 'cart', component: CartComponent, canActivate: [LoginGuard] },
  {
    path: 'searchPage',
    component: SearchPageComponent,
    canActivate: [LoginGuard],
  },
  { path: 'checkOut', component: CheckoutComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
