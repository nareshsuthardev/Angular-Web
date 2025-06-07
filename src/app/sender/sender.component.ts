import { Component } from '@angular/core';
import { WhatappService } from '../services/whatapp.service';
import { EmployeesService } from '../services/employees.service';
import { employeeType } from '../services/employeeType';
console.log("-------------------   sender    ------------------- ")
@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  senderId = 3;
  receiverId = 1;
  employees: employeeType[] = [];
  messages: unknown[] = [];
  ons = this.whatApp.observerSecond;
  constructor(private whatApp: WhatappService, private employeesService: EmployeesService) { }
  sendMessage(message: string,userId : any) {
    console.log(userId,this.receiverId,this.senderId)
    if(userId == '1'){
      this.whatApp.messageSecond.next(message);
    }
    else{
      this.whatApp.messageFirst.next(message);
    }
  }
  ngOnInit(): void {
    console.log("-------------------   sender   OnInit ------------------- ");
    this.employees = this.employeesService.getEmployees();
    this.whatApp.messageThird.subscribe((param: unknown) => {
      this.messages.push(param);
    })
  }
  setChnage(reciverId: any) {
    this.receiverId = parseInt(reciverId);
  }
}
