import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Gender } from 'src/app/models/Gender';
import { SignUp } from 'src/app/models/SignUp';
import { LoginService } from 'src/app/services/login.service';
import { NotificationAlertService } from 'src/app/services/notification--alert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    private loginService: LoginService,
    private notificationAlertService: NotificationAlertService,
    private route: Router
  ) {}

  genders: Gender[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Others', viewValue: 'Others' },
  ];

  signUpObj: SignUp = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    gender: '',
    age: 0,
    dob: new Date(),
  };

  SignUp(signUpForm: NgForm) {
    this.loginService.postUser(this.signUpObj).subscribe({
      next: (response) => {
        this.loginService.LoggedUser = response;
        this.notificationAlertService.showSuccess(
          'User Created',
          `${this.signUpObj.userName}`
        );
      },
    });

    this.route.navigateByUrl('');
  }
}
