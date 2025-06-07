import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auh.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './LoginValidator/email.validator';
import { cfPasswordValidator } from './LoginValidator/cfPassword.validator';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { HttpClient } from '@angular/common/http';
import { passwordMatchValidator } from './LoginValidator/passwordMatchValidator';
console.log("-------------------   Login    ------------------- ")
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ProductsService, HttpClient, ProductComponent]
})
export class LoginComponent implements OnInit {
  formArray = new FormArray([]);
  constructor(private authService: AuthService, private fb: FormBuilder, private productService: ProductsService, private routes: Router, private proCom: ProductComponent) { }
  loginForm = this.fb.group({
    // email: new FormControl('', [Validators.required,emailValidator]),
    email: new FormControl('', [Validators.required, emailValidator(/[a-z]/)]), // for EXATRA pattern mathch
    password: new FormControl('', Validators.required),
    cfPassword: new FormControl('', Validators.required),
    newEmails: this.fb.array([new FormControl('', [Validators.required, emailValidator(/[a-z]/)])]),
  },{validators:passwordMatchValidator});
  
  ngOnInit(): void {
    console.log("-------------------   Login    ------------------- ")
  }
  login() {
    console.log(this.loginForm.value)
    // this.authService.login()
    // this.resetForm();
    // this.loginForm.reset()
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get cfPassword() {
    return this.loginForm.get('cfPassword');
  }
  get newEmails() {
    return this.loginForm.get('newEmails') as FormArray;
  }
  removeEmail(i: number) {
    this.newEmails.removeAt(i)
  }
  setvalueToFormArray() {
    if (this.newEmails.controls.length >= 2) {
      this.newEmails.controls[1].setValue('naresh');
      this.newEmails.controls[1].disable({ onlySelf: true })
    }
    // this.loginForm.setValue({ email: 'DHJDSJF', password: 'SDSD', cfPassword: 'SDFSF', newEmails: ['JJ'] })
    //  this.loginForm.patchValue({ email: 'AAAAAA' })
  }
  addEmailField() {
    this.newEmails.push(this.fb.control(''));
  }
  resetForm() {
    // this.newEmails.controls.splice(1);
    for (let index = this.newEmails.controls.length; index >= 1; index--) {
      this.removeEmail(index)
    }
  }
}
