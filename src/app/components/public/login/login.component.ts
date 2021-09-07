import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {

    let loginFormInputs = {
      email: new FormControl("",[
        Validators.required ,
        Validators.email
      ]),

      password: new FormControl("",[
        Validators.required,
        Validators.minLength(2)
      ])
    }

    this.loginForm = fb.group(loginFormInputs);

  }

  get myemail() { return this.loginForm.get('email'); }
  get mypassword() { return this.loginForm.get('password'); }

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/']);
    } 
  }

  login(){
    let data = this.loginForm.value ;
    console.log(data); 
   

    let user = new User(undefined,
      undefined,
      data.email,
      undefined,
      data.password,
     );

    this.userService.loginAdmin(user).subscribe(
      (res: any) => {
        console.log(res);
        let token = res.token;

        localStorage.setItem("myToken", token);
        this.router.navigate(['/']);
      },
      (err: any) => {
        console.log(err);

      }
    )
  }

}