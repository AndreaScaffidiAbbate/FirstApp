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




  managePlant(plantForm: NgForm) {
   let newPlant = plantForm.value as Plant

   if(this.plant){
     this.editPlant(newPlant)
     const empyPlant : any = null;
     this.plant = empyPlant;
     plantForm.reset()
   }

    if(!this.plant){
      if (plantForm.valid){
        this.addPlant(plantForm)
      }

} }

  editPlant(newPlant: Plant){
    this.plantList = this.plantList.map(plant => plant.id === this.plant.id ? newPlant : plant)
  }

  addPlant(plantForm: NgForm) {
    const newPlant = plantForm.value as Plant
    this.plantList = [...this.plantList, newPlant]
    plantForm.reset()
  }

  plantUpdate($event: Plant) {
    this.plant = $event
  }


}
