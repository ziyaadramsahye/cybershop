import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class Auth{

  isAuthenticate = false;
  user: User = {email: null, password: null};
  userLoggedIn: CustomEvent;

  constructor(private userService: UserService){
    this.user = this.getUser();
  }

  login(user: User): boolean {
    this.setUser(user);
    if(this.user.email === this.userService.getUser().email && this.user.password === this.userService.getUser().password){
      sessionStorage.setItem("user", JSON.stringify(user));
      this.isAuthenticate = true;
      return this.isAuthenticate;
    }
    this.isAuthenticate = false;
    return this.isAuthenticate;
  }

  logout(){
    sessionStorage.removeItem("user");
    this.user = {email: null, password: null};
    this.isAuthenticate = false;
    return this.user;
  }

  setUser(user){
    this.user = user;
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem("user"));
  }
}
