import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user-service/user.service";
import {NewUser} from "../../shared/models/newUser";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  userList : NewUser[];
  userSubscription : Subscription;
  postUserSubscription : Subscription;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userSubscription = this.userService.getAllUsers().subscribe(
      observer => {this.userList = [...observer]},
      error => { console.log(error)},
      () => { console.log('Get : complete')})
  }

  postNewUser(){
    const newUser : NewUser = {
      id: 32454 +1 ,
      name: 'Marcellaccio',
      surname : 'Mercellonzi',
      phoneNumber : 6666666666666
    }

    this.postUserSubscription = this.userService.postUser(newUser).subscribe(
      observer => {this.getAllUsers()},
      error => {console.log('aggiunta andata male')},
      () => {console.log('Post : tutto apposto')})
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
    this.postUserSubscription?.unsubscribe()
  }

}
