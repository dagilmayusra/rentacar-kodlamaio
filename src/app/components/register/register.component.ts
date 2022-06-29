import { User } from './../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private accountService:AccountService,
    private formBuilder:FormBuilder
  ) { }

  userAddForm:FormGroup;
  user:User;
  users:User[];

  createUserAddForm(){
    this.userAddForm = this.formBuilder.group({
      email: ["", Validators.required],
      password:["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.createUserAddForm();
  }
  addUser(){
    if(this.userAddForm.valid){
      this.user = Object.assign({}, this.userAddForm.value)
    }
    this.accountService.addUser(this.user).subscribe(data=>{
      alert(data.email + "kişi başarıyla eklendi")
      location.reload();
    })
  }

}
