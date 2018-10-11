import { Injectable }  from '@angular/core';
import {Monster} from "./monster";




@Injectable()
export class MonsterService {
  monster: Monster;
  constructor() {
  }
  setMonster(monster: Monster): void
  {
    this.monster = monster;
  }
  getMonster(): Monster{
    return this.monster;
  }

}
