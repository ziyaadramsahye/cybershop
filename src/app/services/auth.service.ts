import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class Auth{
  isAuthenticate = false;
  user: User = {email: null, password: null};

  constructor(private userService: UserService){
    this.user = this.getUser();
  }

  login(user: User): boolean {
    this.setUser(user);
    if(user === this.user && this.user.email !== null){
      this.isAuthenticate = true;
      return this.isAuthenticate;
    }
    this.isAuthenticate = false;
    return this.isAuthenticate;
  }

  logout(){
    this.user = {email: null, password: null};
    this.isAuthenticate = false;
    return this.user;
  }

  setUser(user){
    this.user = user;
  }

  getUser(){
    return this.user;
  }
}
