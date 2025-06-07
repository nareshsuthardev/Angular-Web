import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { ResponseTypeUser } from 'src/app/services/userResponseType';
import { userType } from 'src/app/services/userType';
import { UsersService } from 'src/app/services/users.service';
console.log("---------------  user comp   --------------------")

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList!: ResponseTypeUser[];
  constructor(private httpClient: HttpClient, private userService: UsersService) { }
  getUsers() {
    this.userService.getAllUser().subscribe((data) => {
      pipe(
        map((data, index) => {
          // console.log(data['users']);
        })
      )
    })
  }
  ngOnInit(): void {
    this.getUsers()
  }
}
