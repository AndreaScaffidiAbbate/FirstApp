import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TDformComponent} from "./tdform.component";
import {FormsModule} from "@angular/forms";
import { PlantTableComponent } from './plant-table/plant-table.component';

const routes : Routes = [
  {path: '', component: TDformComponent }
]

@NgModule({
  declarations: [
    TDformComponent,
    PlantTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TDformModule { }
