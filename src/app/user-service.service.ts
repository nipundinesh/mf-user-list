import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users ;
  private getUsersURL = 'http://localhost:3000/getUsers'; 
  private addUserURL = 'http://localhost:3000/addUser'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getUsers() :Observable<any[]>{
    return this.http.get<any []>(this.getUsersURL);
  }

  addUser(user){
    console.log(user);
    
    return this.http.post<any>(this.addUserURL, user, this.httpOptions);
  }

 
}
