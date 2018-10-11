import {Component, OnInit, SimpleChanges} from '@angular/core';
import { Monster } from "../monster";
import {User} from "../user";
import {Router} from "@angular/router";
import { MonsterService } from '../monster-service';
import {UserService} from "../user-service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',

  styleUrls: ['./home-page.component.css'],
})


export class HomePageComponent implements OnInit {

  monsterarr: Monster[] =  JSON.parse(localStorage.getItem("monsters"));
  usersarr: User[] = JSON.parse(localStorage.getItem("users"));
  selectedMonster: Monster;
  user: User;
  selectedUser: User;
  monster: Monster;
  flag:boolean;
  searchStr: string = '';
  nameready; string = "";
  checkuserstate: string = "";
  user1: string;
  subflag: boolean;

  constructor(private router: Router, private _monsterservice: MonsterService, private _userservice: UserService) { }

  ngOnInit() {
    if(this.user = JSON.parse(sessionStorage.getItem('hois')))
    {
      this.flag = true;
    }
    else {this.flag = false;}

  }
  onSelect(user: User)
  {
    this.selectedUser = user;
  }
  onSelectMonster(monster: Monster)
  {
    this.selectedMonster = monster;
  }

  create(monstername: string): void
  {
       let monstermas: Monster [] = [];
      if(monstername === "") return;
      else  if(monstername.replace(/\s/g, '').length)
      {
        if(this.monsterarr === null)
        {
          monstermas.push(new Monster(monstername,"danger","this is empty", "0"));
          localStorage.setItem("monsters", JSON.stringify(monstermas));
        }
        else {
          this.monster = new Monster(monstername, "danger", "this is empty", "0");
          this.monsterarr.push(this.monster);
          localStorage.setItem("monsters", JSON.stringify(this.monsterarr));
        }
      }
  }

  deleteMonster(monster: Monster):void
  {
    if(monster) {
      let monstertmparr: Monster [] = JSON.parse(localStorage.getItem("monsters"));
      let newarray: Monster [] = [];
      for (var i in monstertmparr) {
        if (monstertmparr[i].name !== monster.name) {
          newarray.push(monstertmparr[i]);
        }
        else {
        }
      }
      localStorage.setItem("monsters", JSON.stringify(newarray));
      this.monsterarr = JSON.parse(localStorage.getItem("monsters"));
    }
    else return;
  }

  createUser(username: string): void
  {

    let usertmp: User [] = JSON.parse(localStorage.getItem("users"));
    for (var i in usertmp) {
      if (usertmp[i].username === username) {
        this.nameready = "Такое имя уже существует";
        return;
      }
    }
    //this.user1.username = username;
    let users: User [] = [];
    if(username === "") return;
    else  if(username.replace(/\s/g, '').length)
    {
      if(this.usersarr === null)
      {
        users.push(new User(username,"username","12345", false));
        this.user = JSON.parse(sessionStorage.getItem('hois'));
        localStorage.setItem("users", JSON.stringify(users));
        this.usersarr = JSON.parse(localStorage.getItem("users"));
      }
      else {
        this.user = new User(username,"username","12345", false);

        this.usersarr.push(this.user);
        this.user = JSON.parse(sessionStorage.getItem('hois'));
        localStorage.setItem("users", JSON.stringify(this.usersarr));
        this.usersarr = JSON.parse(localStorage.getItem("users"));
      }
    }
    this.user1 = username;
  }

  deleteUser(user: User):void
  {
    let usertmp: User [] = JSON.parse(localStorage.getItem("users"));
    let newarray: User [] = [];
    for (var i in usertmp) {
      if (usertmp[i].username !== user.username) {
        newarray.push(usertmp[i]);
      }
      else {
      }
    }
    localStorage.setItem("users", JSON.stringify(newarray));
    this.usersarr = JSON.parse(localStorage.getItem("users"));
    }

  moredetails(monster: Monster): void
  {
    if(!this.flag) return;
    else
    {
      this.selectedMonster = monster;
      this._monsterservice.setMonster(monster);
      this.router.navigate(['/monster-details']);
    }
  }

  moredetailsUser(user: User): void
  {
    if(!this.flag) return;
    else
    {
      this.selectedUser = user;
      this._userservice.setUser(user);
      this.router.navigate(['/user-details']);
    }
  }
  ngOnChanges(event: any) {
    if(this.user1 !== event.target.value)
    {
      this.nameready = "";
    }
  }
}
