import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user-service/user.service";
import {NewUser} from "../../shared/models/newUser";
import {Subscription} from "rxjs";
import {FormControl, FormGroup,Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  userList : NewUser[];
  userSubscription : Subscription;
  actionsUserSubscription : Subscription;
  userForm : FormGroup;
  idCounter : number;
  userToEdit : NewUser | undefined;
  idForDelete : string ;

  constructor(private userService : UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)]),
      surname : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)]),
      phoneNumber : new FormControl('', [
        Validators.required])
    })
    this.getAllUsers()
  }

  getAllUsers(){
    this.userSubscription = this.userService.getAllUsers().subscribe(
      observer => {this.userList = [...observer]},
      error => { console.log(error)},
      () => { console.log('Get : complete')})
  }

  postNewUser(){
    const newUser : NewUser = this.userForm.value as NewUser
    newUser.id = this.idCounter + Math.floor(Math. random() * (1000 - 1 + 1)) + 1;

    this.actionsUserSubscription = this.userService.postUser(newUser).subscribe(
      observer => {this.getAllUsers(), this.userForm.reset()},
      error => {console.log('aggiunta andata male')},
      () => {console.log('Post : tutto apposto')})
  }

  manageUser(){
    if (this.userToEdit){
      const editedUser = this.userForm.value;
      editedUser.id = this.userToEdit.id;
       this.updateUser(editedUser.id, editedUser)
    }else{
      this.postNewUser()
    }
  }
  updateUser(id:number, editedUser : NewUser){
    this.actionsUserSubscription = this.userService.patchUser(id, editedUser).subscribe(
      obs => {this.getAllUsers(), this.userForm.reset(), console.log(obs)},
      error => console.log(error),
      ()=> console.log('Patch: complete'))
  }
  setUser(id : number) {
    this.userToEdit = this.userList.find( el => el.id == id ) as NewUser;
    this.userForm.patchValue(this.userToEdit);
  }

  openDialog(dialog : any , id : number) {
    this.dialog.open(dialog);
    this.idForDelete = id.toString();
  }

  deleteUser(){
   this.actionsUserSubscription = this.userService.deleteUser(this.idForDelete).subscribe(
     obs => {this.getAllUsers(), this.idForDelete = ''},
     error => console.log(error),
     () => console.log('deleted')
   )
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
    this.actionsUserSubscription?.unsubscribe()
  }

}
