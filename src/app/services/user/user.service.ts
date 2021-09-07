import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getAllUsersUrl = "http://localhost:8080/users";
  private getOneUserUrl = "http://localhost:8080/users/";
  private deleteUserUrl = "http://localhost:8080/users/";
  private addUserUrl = "http://localhost:8080/users/add";
  private updateUserUrl = "http://localhost:8080/users/update";

  private registerUserUrl="http://localhost:8080/users/register";
  private loginUserUrl="http://localhost:8080/users/login";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl);
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }

  addUser(user: User) {
    return this.http.post<any>(this.addUserUrl, user);
  }

  updateUser(user:User){
    return this.http.put<any>(this.updateUserUrl, user);
  }

  //Register & Login

  registerAdmin(user : User){
    return this.http.post<any>(this.registerUserUrl, user);
  }

  loginAdmin(user:User){
    return this.http.post<any>(this.loginUserUrl, user);
  }

  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  isLoggedInAdmin(){

    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if(decodedToken.data.role =="admin"){
        return true
      }else
      {return false ;}
    } else {
      return false;
    }
  }
  isLoggedInClient(){

    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if(decodedToken.data.role =="client"){
        return true
      }else
      {return false ;}
    } else {
      return false;
    }
  }

}