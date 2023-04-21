import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/models/SignUp';
import { LoginService } from 'src/app/services/login.service';
import { NotificationAlertService } from 'src/app/services/notification--alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginObj: SignUp = {
    email: '',
    password: '',
  };

  constructor(
    private loginService: LoginService,
    private route: Router,
    private notificationAlertService: NotificationAlertService
  ) {}

  LoginSubmit(loginForm: NgForm) {
    let userPresent = false;
    if (this.loginService.LoginName === 'Login') {
      for (let item of this.loginService.LoggedUser) {
        if (
          item.email === loginForm.value.email &&
          item.password === loginForm.value.password
        ) {
          userPresent = true;
          this.loginService.loginValue = true;
          this.notificationAlertService.showSuccess(
            'has logged in',
            `${item.userName}`
          );
          this.route.navigate(['home']);
          this.loginService.LoginName = 'LogOut';
          return;
        }
      }
    } else if (this.loginService.LoginName === 'LogOut') {
      this.loginService.loginValue = false;
      this.loginService.LoginName = 'Login';

      this.route.navigate(['']);
    }

    if (userPresent == false) {
      this.notificationAlertService.showWarning(
        'Invalid Credentials',
        `Message`
      );
    }
  }
}
