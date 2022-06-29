import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  login(user:User){
    return this.httpClient.get<User[]>('http://localhost:3000/users?email=' + user.email + '&password=' + user.password)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

  addUser(val:User):Observable<User>{
    return this.httpClient.post<User>('http://localhost:3000/users',val)
  }
}
