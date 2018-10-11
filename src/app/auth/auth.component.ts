import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
/*
  usersarr: User[] =  [{ username: "admin",
    email: "admin",
    password: "admin",
    role: true
  }];*/
  flagusername: boolean;
  flagpassword: boolean;
  userForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(usname: string, passw: string)
  {
      let usersarr: User [] = JSON.parse(localStorage.getItem("users"));
    for( let i = 0; i < usersarr.length; i++)
    {
      if(usersarr[i].username === usname)
      {
         if (usersarr[i].password === passw)
         {
           this.router.navigate(['/home-page']);
           sessionStorage.setItem("hois", JSON.stringify(usersarr[i]));
         }
         else this.flagpassword = true;
      }
      else {this.flagusername = true;
        this.flagpassword = true;
      }
    }
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.userForm.controls[controlName];

    const result =  control.touched && this.flagusername && this.flagpassword;

    return result;
  }
  private initForm() {
    this.userForm = this.fb.group({
      usn: ['',[ Validators.required,
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/),
        Validators.minLength(3)],
      ],
      pss: [null, [
        Validators.required,
        Validators.minLength(3)]
      ]
    });
  }

}
