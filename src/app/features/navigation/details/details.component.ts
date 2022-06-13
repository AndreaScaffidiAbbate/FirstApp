import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  plantList : any[] = [
    {id: 1, name: 'Baobab'},
    {id: 2, name: 'Basilico'},
    {id: 3, name: 'Barbabietola'},
    {id: 4, name: 'Banano'},
    {id: 5, name: 'Bamboo'}
  ]

  id : any;
  obj : any ;

  constructor(private activatedROute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedROute.paramMap.subscribe(
      params => {
        this.id = params.get('id')
      }
    );
    this.obj = this.plantList.find(res => this.id == res.id);

  }

}
