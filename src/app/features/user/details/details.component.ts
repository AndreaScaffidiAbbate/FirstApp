import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../core/services/user-service/user.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {NewUser} from "../../../shared/models/newUser";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  userSubscription : Subscription;
  user : NewUser;
  text : string ;

  constructor(private activatedRoute : ActivatedRoute, private userService : UserService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot?.paramMap?.get('id') || '';
    this.userService.getUserById(+id).subscribe(
      obs => this.user = {...obs},
      error => this.text = error,
      () => console.log('details complete')
    )
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }

}
