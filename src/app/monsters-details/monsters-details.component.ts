import {Component, Input, OnInit} from '@angular/core';
import { Monster } from "../monster";
import { MonsterService } from '../monster-service';
import {User} from "../user";

@Component({
  selector: 'app-monsters-details',
  templateUrl: './monsters-details.component.html',
  styleUrls: ['./monsters-details.component.css']
})
export class MonstersDetailsComponent implements OnInit {

  user: User;
  monster: Monster;
  constructor(private _monsterservice: MonsterService) { }

  ngOnInit() {
    this.monster = this._monsterservice.getMonster();
    this.user = JSON.parse(sessionStorage.getItem('hois'));
  }

  editDanger(str: string, monster: Monster): void
  {
    monster.danger = str;
    let monsterarr: Monster []  =  JSON.parse(localStorage.getItem("monsters"));
    let  newarray: Monster [] = [];
      for (var i in monsterarr)
      {
       if(monsterarr[i].name === monster.name)
       {
         monsterarr[i].danger = str;
       }
       newarray [i] = monsterarr[i];
      }
    localStorage.setItem("monsters", JSON.stringify(newarray));
  }

  editName(str: string, monster: Monster): void {
    if (str != "") {

      let monsterarr: Monster []  =  JSON.parse(localStorage.getItem("monsters"));
      let newarray: Monster [] = [];
      for (var i in monsterarr) {
        if (monsterarr[i].name === monster.name) {
          monsterarr[i].name = str;
        }
        newarray [i] = monsterarr[i];
      }
      localStorage.setItem("monsters", JSON.stringify(newarray));
      monster.name = str;
    }
    else return;
  }
  editLevel(str: string, monster: Monster): void
  {
    if (str != "") {
      monster.level = str;
      let monsterarr: Monster []  =  JSON.parse(localStorage.getItem("monsters"));
      let newarray: Monster [] = [];
      for (var i in monsterarr) {
        if (monsterarr[i].name === monster.name) {
          monsterarr[i].level = str;
        }
        newarray [i] = monsterarr[i];
      }
      localStorage.setItem("monsters", JSON.stringify(newarray));
    }
    else return;
  }
  editDescription(str: string, monster: Monster):void
  {
    monster.description = str;
    let monsterarr: Monster []  =  JSON.parse(localStorage.getItem("monsters"));
    let newarray: Monster [] = [];
    for (var i in monsterarr) {
      if (monsterarr[i].name === monster.name) {
        monsterarr[i].description = str;
      }
      newarray [i] = monsterarr[i];
    }
    localStorage.setItem("monsters", JSON.stringify(newarray));
  }


}
