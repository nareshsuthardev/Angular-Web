import { Component, OnInit } from '@angular/core';
import { WhatappService } from '../services/whatapp.service';
import { EmployeesService } from '../services/employees.service';
import { employeeType } from '../services/employeeType';
import { Message } from '../services/Message';
import { of, switchMap } from 'rxjs';
console.log("-------------------   reciver    ------------------- ")
@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrls: ['./reciver.component.css']
})
export class ReciverComponent implements OnInit {

  senderId = 0;
  receiverId = 0;
  fistId = 0;
  secondId = 1;
  thirsdiD = 3;
  messages: unknown[] = [];
  messagesThird: unknown[] = [];
  messagesSecond: unknown[] = [];
  currentStyles = {
    'background-color': (this.senderId == this.receiverId) == true ? 'red !important' : 'blue !important',
  };
  employees: employeeType[] = [];
  constructor(private whatApp: WhatappService, private employeesService: EmployeesService) {

  }
  sendMessage(message: string,) {
    this.whatApp.messageSecond.next(message);
  }
  ngOnInit(): void {
    console.log("-------------------   reciver    ------------------- ")
    this.employees = this.employeesService.getEmployees();
    this.whatApp.messageFirst.subscribe((param: unknown) => {
      console.log("user 111 revived")
      this.messages.push(param);
    });
   
    this.whatApp.messageSecond.subscribe((param: unknown) => {
      // console.log("user 2222 revived")
      this.messagesSecond.push(param);
    });
    
let srcObservable= of(1,2,3,4)
let innerObservable= of('A','B','C','D')
 
srcObservable.pipe(
  switchMap( val => {
    console.log(val)
    console.log('Source value '+val)
    console.log('starting new observable')
    return innerObservable
  })
)
.subscribe(ret=> {
  console.log('Recd ' + ret);
})
  }
  setload(){
    setTimeout(() => {
    
      this.whatApp.messageFirst.next('late added to subject')
    }, 4000);
    
    console.log("settimeout setload in")
    setTimeout(() => {
      console.log("set in")
      this.whatApp.messageFirst.subscribe((param2: unknown) => {
        console.log("settimeout")
        console.log("----",param2)
      });
    }, 4000);
  }
  // setChnage(reciverId: any) {
  //   this.receiverId = parseInt(reciverId);
  // }
}
