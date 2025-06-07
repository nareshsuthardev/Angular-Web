import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auh.service';
console.log("-------------------   Home  COMP  ------------------- ")
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private authService: AuthService) {

  }
  ngOnInit(){
    console.log("-------------------   Home    ------------------- ")
  }
  login() {
    this.authService.login();
  }
  loout() {
    this.authService.logOut();
  }
}
