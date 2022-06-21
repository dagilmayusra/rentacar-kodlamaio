import { AccountService } from './../../services/account.service';
import { User } from './../../models/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:FormGroup;
  user:User

  constructor(
    private formBuilder:FormBuilder,
    private accountService:AccountService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(){
    if (this.loginForm.valid) {
      this.user = Object.assign({}, this.loginForm.value);
      this.accountService.login(this.user).subscribe((data) => {
          this.router.navigateByUrl('/');
          localStorage.setItem('token', "true");
          alert('Giriş Başarılı');
      })
    }else{
      alert('Email veya parola hatalı');
          
    }
  } 
}