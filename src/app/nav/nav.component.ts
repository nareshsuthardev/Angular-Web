import { Component, OnInit } from '@angular/core';
console.log("-------------------   NAV    ------------------- ")
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  ngOnInit(): void {
    console.log("-------------------   NAV    ------------------- ")
  }
}
