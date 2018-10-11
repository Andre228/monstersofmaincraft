import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service";
import {User} from "../user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user:User;
  usercurrent: User;
  role: boolean;
  constructor(private _userservice: UserService) { }

  ngOnInit() {
    this.user = this._userservice.getUser();
    this.usercurrent = JSON.parse(sessionStorage.getItem('hois'));
  }

  isuser()
  {
    this.role = false;
  }
  isadmin()
  {
    this.role = true;
  }
  editName(str: string, user: User): void
  {
    if (str != "") {

      let userarr: User [] = JSON.parse(localStorage.getItem("users"));
      let newarray: User [] = [];
      for (var i in userarr) {
        if (userarr[i].username === user.username) {
          userarr[i].username = str;
        }
        newarray [i] = userarr[i];
      }
      localStorage.setItem("users", JSON.stringify(newarray));
      user.username = str;
    }
    else return;
  }
  editEmail(str: string, user: User):void
  {
    if (str != "") {

      let userarr: User [] = JSON.parse(localStorage.getItem("users"));
      let newarray: User [] = [];
      for (var i in userarr) {
        if (userarr[i].username === user.username) {
          userarr[i].email = str;
        }
        newarray [i] = userarr[i];
      }
      localStorage.setItem("users", JSON.stringify(newarray));
      user.email = str;
    }
    else return;
  }
  editPassword(str: string, user: User):void
  {
    if (str != "") {

      let userarr: User [] = JSON.parse(localStorage.getItem("users"));
      let newarray: User [] = [];
      for (var i in userarr) {
        if (userarr[i].username === user.username) {
          userarr[i].password = str;
        }
        newarray [i] = userarr[i];
      }
      localStorage.setItem("users", JSON.stringify(newarray));
      user.password = str;
    }
    else return;
  }
  editRole(user: User):void
  {
    let userarr: User [] = JSON.parse(localStorage.getItem("users"));
    let newarray: User [] = [];
    for (var i in userarr) {
      if (userarr[i].username === user.username) {
        userarr[i].role = this.role;
      }
      newarray [i] = userarr[i];
    }
    localStorage.setItem("users", JSON.stringify(newarray));

  }

}
