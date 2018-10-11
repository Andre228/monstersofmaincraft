import {Injectable, Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'search'})


@Injectable()
export class SearchPipe implements PipeTransform
{
  transform(monsterarr, value)
  {
    return monsterarr.filter( monster => {
      return monster.name.includes(value);
    });
  }

}
