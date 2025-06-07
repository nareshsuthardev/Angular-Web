import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { employeeType } from 'src/app/services/employeeType';
import { EmployeesService } from 'src/app/services/employees.service';
import { CanDeactivateGuardService, IDeactivate } from 'src/app/services/guards/candeactivate.guard.service';

console.log("-------------------   Employee details  COMP ------------------- ")


@Component({
  selector: 'app-employee-deatil',
  templateUrl: './employee-deatil.component.html',
  styleUrls: ['./employee-deatil.component.css'],
})
export class EmployeeDeatilComponent {

  EMP = {
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
  EmployeeForm = new FormGroup({
    // firstName:new FormControl('NARESH),
    // firstName:new FormControl(this.EMP.firstName),
    // lastName:new FormControl(this.EMP.lastName),
    // emailAdredd:new FormControl(this.EMP.emailAddress),
    // phoneNumber:new FormControl(this.EMP.phoneNumber),
  })
  @ViewChild('containerrr') loader!: ElementRef;
  public opertion = {
    isEditing: { is: false, id: 0 },
    isDeleting: false,
    isRoleChanging: false,
  }

  empl_list!: employeeType[];
  paramsSubscription!: Subscription;
  user = { 'id': 'number', 'name': 'string' };
  constructor(private employees: EmployeesService, private canDeactivateGuardService: CanDeactivateGuardService, private activeRoute: ActivatedRoute, private route: Router) {
  }
  ngOnInit(): void {

    console.log("-------------------   Employee details   ------------------- ")
    // this.route.navigate(["/employee-deatil", { id: emp_det.userId, name: emp_det.firstName }]);
    this.user.id = this.activeRoute.snapshot.params["id"];
    this.user.name = this.activeRoute.snapshot.params["name"];
    this.empl_list = this.employees.getEmployees();
    this.activeRoute.params.subscribe(params => {
      //  this.EMP.firstName = this.empl_list.find(x => x.id == params['id'] && x.firstName == params["name"])!.firstName;
      this.opertion = { ...this.employees.getOperation() };
      this.EMP = { ...this.EMP, ...this.empl_list.find(x => x.id == params['id'] && x.userId == params["name"]) };
      setTimeout(() => {
        console.log(this.loader)
      }, 3000);

    })

    this.EmployeeForm.addControl('firstName', new FormControl(this.EMP.firstName, [Validators.required]));
    this.EmployeeForm.addControl('lastName', new FormControl(this.EMP.lastName));
    this.EmployeeForm.addControl('emailAdredd', new FormControl(this.EMP.emailAddress));
    this.EmployeeForm.addControl('phoneNumber', new FormControl(this.EMP.phoneNumber));


    // ----------NESTING FRM GROPUP 
    // this.EmployeeForm.addControl('fullname',new FormGroup({
    //   'firstName':new FormControl(this.EMP.firstName),
    //   'lastName': new FormControl(this.EMP.lastName),
    // }));

  }

  ngDoCheck() {
    console.log("-------emp detail page")
    this.activeRoute.paramMap.subscribe((data)=>{
      console.log(data)
    })
  }
  edit(type: boolean, id: number) {
    this.employees.setEditing(type, id);
  }
  save(emp: employeeType) {
    this.employees.updateEmployee(emp);
    console.log(emp)
    this.edit(false, emp.id)
  }
  change(value: Event) {
    console.log(value);
  }
  canExits() {
    if (this.opertion.isEditing.is) {
      if (confirm("go back ?")) {
        return true
      }
    }
    return false
    // if(this.opertion.isEditing.is && this.EMP.firstName)
  }
}
