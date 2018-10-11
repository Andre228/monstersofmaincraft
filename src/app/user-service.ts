import { Injectable }  from '@angular/core';
import {User} from "./user";




@Injectable()
export class UserService {
  user: User;
  constructor() {
  }
  setUser(user: User): void
  {
    this.user = user;
  }
  getUser(): User{
    return this.user;
  }

}
