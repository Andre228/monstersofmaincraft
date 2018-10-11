
/**
 * Created by Fedot on 06.09.2018.
 */
export class Monster
{
  name: string;
  danger: string;
  description: string;
  level: string;

  constructor(username: string,danger: string, description:string, level: string)
  {
    this.name = username;
    this.danger = danger;
    this.description = description;
    this.level = level;
  }
}
