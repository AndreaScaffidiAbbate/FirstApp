import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import {RouterModule, Routes} from "@angular/router";

const routes : Routes =[
  {path: '', component: DirectivesComponent}
]

@NgModule({
  declarations: [
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule { }
