import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewUser} from "../../../shared/models/newUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUsers() : Observable<NewUser[]>{
   return this.http.get<NewUser[]>('http://localhost:3000/Users');
  }

  postUser(newUser : NewUser): Observable<NewUser>{
    return this.http.post<NewUser>('http://localhost:3000/Users', newUser)
  }
}
