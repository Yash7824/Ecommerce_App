import { Component } from '@angular/core';
import { LaptopService } from './services/laptop.service';
import { MobileService } from './services/mobile.service';
import { BookService } from './services/book.service';
import { ClothService } from './services/cloth.service';
import { SearchProductService } from './services/search-product.service';
import { LoginService } from './services/login.service';
import { SignUp } from './models/SignUp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Frontend';

  constructor(
    private laptopService: LaptopService,
    private mobileService: MobileService,
    private bookService: BookService,
    private clothService: ClothService,
    private searchProductService: SearchProductService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.getUsers().subscribe({
      next: (response: SignUp[]) => {
        for (let obj of response) {
          this, this.loginService.LoggedUser.push(obj);
        }
      },
    });
    console.log(this.loginService.LoggedUser);
    this.laptopService.getLaptops().subscribe({
      next: (response) => {
        for (let obj of response) {
          this.searchProductService.AllProducts.push(obj);
        }
      },
    });

    this.mobileService.getMobiles().subscribe({
      next: (response) => {
        for (let obj of response) {
          this.searchProductService.AllProducts.push(obj);
        }
      },
    });

    this.bookService.getBooks().subscribe({
      next: (response) => {
        for (let obj of response) {
          this.searchProductService.AllProducts.push(obj);
        }
      },
    });

    this.clothService.getClothes().subscribe({
      next: (response) => {
        for (let obj of response) {
          this.searchProductService.AllProducts.push(obj);
        }
      },
    });

    // console.log(this.searchProductService.AllProducts);
  }
}
