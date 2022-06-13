import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeonardoComponent } from './leonardo.component';
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path: '', component: LeonardoComponent}
]

@NgModule({
  declarations: [
    LeonardoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LeonardoModule { }
