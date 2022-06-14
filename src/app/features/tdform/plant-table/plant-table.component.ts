import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Plant, Plants} from "../../../shared/models/plant";

@Component({
  selector: 'app-plant-table',
  templateUrl: './plant-table.component.html',
  styleUrls: ['./plant-table.component.scss']
})
export class PlantTableComponent implements OnInit {

  @Input() plantList : Plants;

  @Output() plantEmitter : EventEmitter<Plant>  = new EventEmitter<Plant>()

  constructor() { }

  ngOnInit(): void {
  }

  editPlant(plant : Plant) {
    this.plantEmitter.emit(plant)
  }
}
