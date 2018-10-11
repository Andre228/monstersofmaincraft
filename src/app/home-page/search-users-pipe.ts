import {Injectable, Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'searchUser'})


@Injectable()
export class UsersPipe implements PipeTransform
{
  transform(usersarr, value)
  {
    return usersarr.filter( user => {
      return user.username.includes(value);
    });
  }

}
