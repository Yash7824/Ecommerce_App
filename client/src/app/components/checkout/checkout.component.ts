import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentMethod } from 'src/app/models/PaymentMethod';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  firstFormGroup = this._formBuilder.group({
    FlatCtrl: ['', Validators.required],
    StreetCtrl: ['', Validators.required],
    CityCtrl: ['', Validators.required],
    StateCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    payment: ['', Validators.required],
    CardNumberCtrl: [''],
    CvvCtrl: [''],
    ExpiryCtrl: [''],
    CustomerIdCtrl: [''],
    PasswordCtrl: [''],
    AccNumCtrl: [''],
    IfscCtrl: [''],
  });

  isLinear = false;

  methods: PaymentMethod[] = [
    { value: 'Credit', viewValue: 'Credit' },
    { value: 'Debit', viewValue: 'Debit' },
    { value: 'NetBanking', viewValue: 'NetBanking' },
  ];

  notAllowFirst: boolean = true;

  notAllowSecond: boolean = true;

  selectedMethod = this.secondFormGroup.value.payment;

  Purchase() {
    this.cartService.deleteAllCart().subscribe({
      next: (response) => {
        this.cartService.CartList = response;
      },
    });
  }
  ngDoCheck() {
    this.selectedMethod = this.secondFormGroup.value.payment;

    if (
      this.firstFormGroup.value.FlatCtrl != null &&
      this.firstFormGroup.value.StreetCtrl != null &&
      this.firstFormGroup.value.CityCtrl != null &&
      this.firstFormGroup.value.StateCtrl != null
    ) {
      this.notAllowFirst = false;
    }

    if (this.secondFormGroup.value.payment != null) {
      if (this.selectedMethod === 'Credit') {
        if (
          this.secondFormGroup.value.CardNumberCtrl != null &&
          this.secondFormGroup.value.CvvCtrl != null &&
          this.secondFormGroup.value.ExpiryCtrl != null
        ) {
          this.notAllowSecond = false;
        }
      } else if (this.selectedMethod === 'Debit') {
        if (
          this.secondFormGroup.value.CardNumberCtrl != null &&
          this.secondFormGroup.value.CvvCtrl != null &&
          this.secondFormGroup.value.ExpiryCtrl != null
        ) {
          this.notAllowSecond = false;
        }
      } else if (this.selectedMethod === 'NetBanking') {
        if (
          this.secondFormGroup.value.CustomerIdCtrl != null &&
          this.secondFormGroup.value.PasswordCtrl != null &&
          this.secondFormGroup.value.AccNumCtrl != null &&
          this.secondFormGroup.value.IfscCtrl != null
        ) {
          this.notAllowSecond = false;
        }
      }
    }
  }

  constructor(
    private _formBuilder: FormBuilder,
    private cartService: CartService
  ) {}
}
