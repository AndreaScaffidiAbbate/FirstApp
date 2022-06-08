import { Component, OnInit } from '@angular/core';
import {User} from "../../core/models/user";
import {Saduser} from "../../core/models/saduser";

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  userList : User[] = [
    {
      username: "Marcello",
      isSubscribed: true,
      email: "marcello@marcello.marcello"
    },
    {
      username: "Marcella",
      isSubscribed: false,
      email: "marcella@marcella.marcella"
    },
    {
      username: "Marcellone",
      isSubscribed: true,
      email: "marcellone@marcellone.marcellone"
    },
    {
      username: "Marcellona",
      isSubscribed: true,
      email: "marcellona@marcellona.marcellona"
    },
  ]

  sadUserList : Saduser[] = [
    {
      id: 1,
      sadName: "Sad Marcello",
      sadStatus : "Really sad",
      sadLevel: 10
    },
    {
      id: 2,
      sadName: "Sad Marcella",
      sadStatus : "Softly sad",
      sadLevel: 3
    },
    {
      id: 3,
      sadName: "Sad Marcellone",
      sadStatus : "Il sad",
      sadLevel: 7
    },
    {
      id: 4,
      sadName: "Sad Marcellona",
      sadStatus : "Medium sad",
      sadLevel: 5
    },
  ]

  titlesList : string[] = ['ID', 'Nome', 'Sad Status', 'SadLevel']

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem($event: number) {
    console.log($event)
    this.sadUserList.splice($event, 1)
    this.sadUserList = [...this.sadUserList]

  }
}
