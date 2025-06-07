import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
console.log("---------------  admin comp   --------------------")
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor( private routes : ActivatedRoute){}
  ngOnInit(){
   
  }

}
