import { Component, OnInit } from '@angular/core';
import {Plant, Plants} from "../../shared/models/plant";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TDformComponent implements OnInit {

  plantList : Plants = [];
  plant : Plant;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addPlant(plantForm: NgForm) {
    const newPlant = plantForm.value as Plant
    this.plantList = [...this.plantList, newPlant]
    plantForm.reset()
  }

  editPlant(){

      }

  managePlant(plantForm: NgForm) {
   let newPlant = plantForm.value as Plant

   if(this.plant){
   }

    if(!this.plant){
      this.addPlant(plantForm)
} }


  plantUpdate($event: Plant) {
    this.plant = $event
  }


}
