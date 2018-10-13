import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service";
import {User} from "../user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user: User;
  usercurrent: User;
  daunstr: string;
  rightdaun: string;
  role: boolean;
  constructor(private _userservice: UserService) { }

  ngOnInit() {
    this.user = this._userservice.getUser();
    this.usercurrent = JSON.parse(sessionStorage.getItem('hois'));
  }

  isuser()
  {
    this.role = false;
    if(this.usercurrent.username === this._userservice.getUser().username) {
      this.daunstr = "Дурак?";
    }
  }
  isadmin()
  {
    this.role = true;
    this.daunstr = "";
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
    if(this.usercurrent.username === user.username)
    {
      let userarr: User [] = JSON.parse(localStorage.getItem("users"));
      let newarray: User [] = [];
      for (var i in userarr) {
        if (userarr[i].username === user.username) {
          userarr[i].role = this.role;
          sessionStorage.setItem("hois", JSON.stringify(userarr[i]));
        }
        newarray [i] = userarr[i];
      }

      localStorage.setItem("users", JSON.stringify(newarray));
    }
    else {
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
  mouseEnter(): string
  {
    this.rightdaun = "Точно даун";
    return this.rightdaun;
  }
  mouseLeave()
  {
    this.rightdaun = "Одумался";
    return this.rightdaun;
  }

}
