import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  plantList : any[] = [
    {id: 1, name: 'Baobab'},
    {id: 2, name: 'Basilico'},
    {id: 3, name: 'Barbabietola'},
    {id: 4, name: 'Banano'},
    {id: 5, name: 'Bamboo'}
  ]


  constructor( private navigation : ActivatedRoute) {}


  ngOnInit(): void {
  }

}
