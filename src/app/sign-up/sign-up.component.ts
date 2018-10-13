import { Component,  OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators} from '@angular/forms';
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {


  userForm: FormGroup;
  resultuser: boolean;
  user: User;
  username: string;
  email: string;
  password: string;
  role: boolean;
  /*usersarr: User[] =  [{ username: "admin",
    email: "admin",
    password: "admin",
    role: true
  }];*/



  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(usname: string, em: string, passw: string ) {

      let usersarr: User [] = [];
      if(usersarr =  JSON.parse(localStorage.getItem('users'))) {
        this.username = usname;
        this.email = em;
        this.password = passw;
        this.user = new User(this.username, this.email, this.password, this.role);
        console.log(this.username);

        usersarr.push(this.user);
        //localStorage.clear();
        sessionStorage.setItem("hois", JSON.stringify(this.user));

        localStorage.setItem("users", JSON.stringify(usersarr));
        this.router.navigate(['/home-page']);
        //this.router.navigate(['/edit-data']);
      }
      else {
        this.username = usname;
        this.email = em;
        this.password = passw;
        this.user = new User(this.username, this.email, this.password, this.role);
        console.log(this.username);

        usersarr.push(this.user);
        //localStorage.clear();
        sessionStorage.setItem("hois", JSON.stringify(this.user));
        localStorage.setItem("users", JSON.stringify(usersarr));
        this.router.navigate(['/home-page']);

      }

  }
  isuser()
  {
    this.role = false;
  }
  isadmin()
  {
    this.role = true;
  }
  getuserName() {
    return localStorage.getItem('profileName');

  }

  private passwordValidator(control: FormControl): ValidationErrors {
    const value = control.value;
    /** Проверка на содержание цифр */
    const hasNumber = /[0-9]/.test(value);
    /** Проверка на содержание заглавных букв */
    const hasCapitalLetter = /[A-Z]/.test(value);
    /** Проверка на содержание прописных букв */
    const hasLowercaseLetter = /[a-z]/.test(value);
    /** Проверка на минимальную длину пароля */
    const isLengthValid = value ? value.length > 7 : false;

    /** Общая проверка */
    const passwordValid = hasNumber && hasCapitalLetter && hasLowercaseLetter && isLengthValid;

    if (!passwordValid) {
      return { invalidPassword: 'Пароль не прошел валидацию' };
    }
    return null;
  }


  isControlInvalid(controlName: string): boolean {
    const control = this.userForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm() {
    this.userForm = this.fb.group({
      usn: ['',[ Validators.required,
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/),
        Validators.minLength(3)],
      ],
      emal: ['', [
        Validators.required, Validators.pattern(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)
      ]
      ],
      pss: [null, [
        Validators.required,
        this.passwordValidator]
      ]
    });
  }

}
