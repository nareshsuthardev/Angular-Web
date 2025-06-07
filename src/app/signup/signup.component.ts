import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auh.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { country } from '../services/country';
import { BehaviorSubject, Observable, Subject, Subscriber, Subscription, interval, pipe, take, takeUntil, takeWhile, timeInterval } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  behaviourSubject = new BehaviorSubject('first Value');
  behaviourSubjectSubscription = new Subscription();
  behaviourSubjectSubscription2 = new Subscription();
  optionalControls2 = ['personal', 'home'];
  optionalControls4 = ['office', 'friend', 'residence', 'public'];
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  sigupForm: FormGroup = new FormGroup({});
  fb = new FormBuilder();
  constructor(private authService: AuthService) {
    this.sigupForm = this.fb.group({
      userName: [''],
      password: [''],
      confirmPassword: [''],
      gender: [''],/// radio
      country: [''],//dropdown
      state: [''], //dropdown
      languages: [''], //dropdown
      dob: [''],
      role: [''],//radio
      isDeleted: [''], // checkbox
      extraInput: [''],
    })
  }
  // ---------  SUNJECT UNSUBSCRIBING  ---------------------
  sub1 = new Subscription();
  sub2 = new Subscription();
  subMain = new Subject()
  // subscribers = new Subscription();
  ngOnInit(): void {

    this.behaviourSubjectSubscription = this.behaviourSubject.subscribe(
      (data) => {
        console.log(data)
      }
    )
    this.behaviourSubjectSubscription.unsubscribe();
    // this.behaviourSubject.next("second value");
    this.behaviourSubjectSubscription2 = this.behaviourSubject.subscribe(
      (data) => {
        console.log(data)
      }
    )
    this.sub1 = this.subMain.pipe(
      // takeWhile((data) => data != 3)
    ).subscribe(
      (data) => {
        console.log(data)
      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log("completed")
      }
    )

    this.subMain.next(1);
    this.subMain.next(2);
    this.subMain.next(3);

    // this.subMain.complete()        // 1 way
    // this.sub1.unsubscribe();       // 2 way
    // takeWhile((data) => data != 5) // 3 way
    // take(1)                        // 4 way
    // takeUntil(observable|subject)  // 5 Way
    this.sub2 = this.subMain.pipe(
      take(1)
    ).subscribe(
      (data) => {
        console.log(data)
      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log("completed")
      }
    )
    this.subMain.next(4);
    this.subMain.next(5);
    this.subMain.next(6);
  }
  extraInput() {
    return this.sigupForm.get('extraInput');
  }
  userName() {
    return this.sigupForm.get('userName');
  };
  password() {
    return this.sigupForm.get('password');
  }
  confirmPassword() {
    return this.sigupForm.get('confirmPassword');
  }
  dynamic = false;
  dynamicsEmailControlArray: string[] = [];
  dynamicEmailsCount = 0;
  addDynamicElem(qnty: number) {
    this.dynamicsEmailControlArray = [];
    this.dynamic = true;
    this.dynamicEmailsCount = qnty;
    for (let index = 0; index < this.dynamicEmailsCount; index++) {
      this.dynamicsEmailControlArray.push(qnty == 2 ? this.optionalControls2[index] : this.optionalControls4[index])
      this.sigupForm.addControl(qnty == 2 ? this.optionalControls2[index] : this.optionalControls4[index], this.fb.control('', [Validators.required, Validators.email]));
    }
    for (let index = (qnty == 2 ? this.optionalControls4.length : this.optionalControls2.length); index > 0; index--) {
      console.log(this.sigupForm.get(this.optionalControls2[index]))
      this.sigupForm.removeControl(qnty == 2 ? this.optionalControls2[index] : this.optionalControls4[index]);
    }

    // for (let index = fromIndex; index <= qnty+1; index++) {
    //   console.log(this.optionalControls[index],index,fromIndex,this.dynamicEmailsCount)
    // this.dynamicsEmailControlArray.push(this.optionalControls[index])
    // this.sigupForm.addControl(this.optionalControls[index], this.fb.control('', [Validators.required, Validators.email]));
    //   // this.sigupForm.addControl(this.optionalControls[index], this.fb.control(this.optionalControls[index], [Validators.required,Validators.email]));
    //   // this.sigupForm.addControl(`email${index}`,this.fb.control({disabled:true,value:'10'}, [Validators.required]));
    //   // .disable
    //   // {{disable:true}}
    //   // .disable(true)
    // }
  }
  getIsValid(index: number) {
    return {
      touched: this.sigupForm.get(this.dynamicsEmailControlArray[index])?.touched,
      dirty: this.sigupForm.get(this.dynamicsEmailControlArray[index])?.dirty,
      valid: this.sigupForm.get(this.dynamicsEmailControlArray[index])?.valid,
      errors: this.sigupForm.get(this.dynamicsEmailControlArray[index])?.errors
    }
    // return this.sigupForm.get(this.dynamicsEmailControlArray[index])!.valid && (this.sigupForm.get(this.dynamicsEmailControlArray[index])?.touched || this.sigupForm.get(this.dynamicsEmailControlArray[index])?.dirty)
  }
  removeEmail(index: number) {
    this.sigupForm.removeControl(this.dynamicsEmailControlArray[index]);
    this.dynamicsEmailControlArray.splice(index, 1);
  }
  onSubmit() {
    console.log(this.sigupForm)
  }
}
