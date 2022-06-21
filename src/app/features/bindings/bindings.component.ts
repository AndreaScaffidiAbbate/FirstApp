import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {

  name = "Giacomo";
  isMarcello = true;
  path = 'https://picsum.photos/100'

  user1 : User = {
    username : "Marcello",
    isSubscribed : true,
    email : "marcello@marcello.marcello"
  }


  constructor() { }

  ngOnInit(): void {
  }

  changeMarcello() {
    this.isMarcello = !this.isMarcello;
  }

  changeText(event: Event) {
    console.log(event)
    const target = event.target as HTMLInputElement
    console.log(target.value)
    console.log(this.name)
  }
}
