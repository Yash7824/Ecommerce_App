import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { CartComponent } from './components/cart/cart.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { BookComponent } from './components/book/book.component';
import { ClothComponent } from './components/cloth/cloth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'mobiles', component: MobileComponent },
  { path: 'books', component: BookComponent },
  { path: 'clothes', component: ClothComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
