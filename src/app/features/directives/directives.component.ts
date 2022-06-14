import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

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

  isVisible : boolean = true;
  timeoutId : any = 0;
  counter = 0;
  isTemplate = true;

  constructor() { }

  ngOnInit(): void {
   this.timeoutId =  setInterval(() => this.isVisible = !this.isVisible , 3000)
    //this.counter =  setInterval(() => this.counter+1 , 4000)
    console.log(this.counter)

  }

  deleteUser(index: number) {
    this.userList.splice(index, 1)
    this.userList = [...this.userList]
  }
  incrementCount() {
  this.counter++
    if(this.counter>5){
      this.counter = 0
    }
  }
  showTemplate() {
    this.isTemplate = !this.isTemplate;
  }
  ngOnDestroy(){
     clearInterval(this.timeoutId)
     //clearInterval(this.counter)
  }


}
