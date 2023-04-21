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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'mobiles', component: MobileComponent },
  { path: 'books', component: BookComponent },
  { path: 'clothes', component: ClothComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'searchPage',
    component: SearchPageComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
