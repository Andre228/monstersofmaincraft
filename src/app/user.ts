
/**
 * Created by Fedot on 06.09.2018.
 */
export class User
{
  username: string;
  email: string;
  password: string;
  role: boolean;


  constructor(username: string, email: string, password: string, role: boolean)
  {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }


}
