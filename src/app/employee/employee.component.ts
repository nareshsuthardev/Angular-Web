import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';
import { employeeType } from '../services/employeeType';
import { LoaderComponent } from '../loader/loader.component';
import { Observable, Observer, Subscription } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { WhatappService } from '../services/whatapp.service';
console.log("-------------------   Employee  COMP  ------------------- ")

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  onClickEvent: unknown | any;
  // obs = new Observable((observer) => {
  //   console.log("Observable starts")
  // observer.next(1)
  // observer.next(2)
  // observer.next(3)
  // observer.next(4)
  // observer.next(5)
  // }).pipe(
  //   tap(data => console.log('tap ' + data)),           //tap
  //   // filter(data => data > 2),                        //filter
  //   tap(data => console.log('filter ' + data)),        //tap
  //   map((val) => { return val as number * 2 }),      //map
  //   tap(data => console.log('final ' + data)),         //tap
  // )
  obs = new Observable((observer) => {
    console.log("Observable starts")
    setTimeout(() => {
      observer.next(1)
    }, 1000);
    setTimeout(() => {
      observer.next(2)
    }, 2000);
    setTimeout(() => {
      observer.next(3)
    }, 3000);
    setTimeout(() => {
      observer.next(4)
    }, 4000);
  })

  data = [];

  // @ViewChild('ggg',{static:true}) LOADER!: ElementRef;
  @ViewChild('ggg') LOADER!: ElementRef;
  ngAfterViewInit() {
    console.log(this.LOADER)
  }
  EMP: employeeType = {
    "id": 0,
    "userId": 'string',
    "jobTitleName": 'string',
    "firstName": 'string',
    "lastName": 'string',
    "preferredFullName": 'string',
    "employeeCode": 'string',
    "region": 'string',
    "phoneNumber": 'string',
    "emailAddress": 'string'
  };
  today = new Date()
  emp_dets!: employeeType;
  emp_detail!: employeeType;
  user = { 'id': 'number', 'name': 'string' };
  public empl_list: employeeType[] = [];
  constructor(private employees: EmployeesService, private activeRoute: ActivatedRoute, private route: Router, private whatsapp: WhatappService) {

  }
  sub1!: Subscription;
  messages = [];
  ngOnInit(): void {
    console.log("-------------------   Employee    ------------------- ")
    this.user.id = this.activeRoute.snapshot.params["id"];
    this.user.name = this.activeRoute.snapshot.params["name"];
    this.empl_list = this.employees.getEmployees();
    this.sub1 = this.obs.subscribe(
      val => { console.log(val) }, //next callback
      error => { console.log("error") }, //error callback
      () => { console.log("Completed"); this.sub1.unsubscribe() } //complete callback
    )

    this.whatsapp.messageFirst.subscribe((e: any) => {
      console.log("employeee ", e)
    })

  }
  otherObservaleSubscribe() {
    this.obs.subscribe(
      val => { console.log(val) }, //next callback
      error => { console.log("error") }, //error callback
      () => { console.log("Completed") } //complete callback
    )
  }
  showEmpDetails(emp_det: employeeType) {
    // this.route.navigate(["/employee-deatil", { id: emp_det.userId, name: emp_det.firstName }]);
    this.user.id = this.activeRoute.snapshot.params["id"];
    this.user.name = this.activeRoute.snapshot.params["name"];
    this.emp_dets = emp_det;
    this.empl_list = this.employees.getEmployees();
  }
  subscribe() {
    this.otherObservaleSubscribe()
  }
}



