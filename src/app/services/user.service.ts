import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService{

  userA: User = {
    email: "ziyaadscarface@gmail.com",
    password: "qwerty"
  };

  getUser(){
    return this.userA;
  }
}
