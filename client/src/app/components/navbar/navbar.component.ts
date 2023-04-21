import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NotificationAlertService } from 'src/app/services/notification--alert.service';
import { SearchProductService } from 'src/app/services/search-product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchInput: string = '';

  constructor(
    private route: Router,
    private searchProductService: SearchProductService,
    private notificationAlertService: NotificationAlertService,
    private loginService: LoginService
  ) {}

  searchButton(inputString: string) {
    let foundFlag = false;
    this.searchProductService.searchproducts.length = 0;
    const inputWords = inputString.split(' ');
    for (let obj of this.searchProductService.AllProducts) {
      let title = obj.title;
      title = title.toLowerCase();
      const words = title.split(' ');

      if (words.includes(inputWords[0].toLowerCase())) {
        this.searchProductService.searchproducts.push(obj);
        foundFlag = true;
      }
    }

    if (foundFlag == false) {
      this.notificationAlertService.showInfo(
        'No product available',
        `${inputString}`
      );
    }

    this.route.navigate(['searchPage']);
  }

  loginName: string = 'LogOut';
  ngDoCheck() {
    this.loginName = this.loginService.LoginName;
  }

  LoginButton() {
    this.loginService.LoginName = 'Login';
    this.loginName = this.loginService.LoginName;
    this.notificationAlertService.showInfo('Logged Out', `User`);
  }
}
