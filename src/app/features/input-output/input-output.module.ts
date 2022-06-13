import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputOutputComponent} from "./input-output.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path: '', component: InputOutputComponent}
]

@NgModule({
  declarations: [InputOutputComponent],
  exports: [
    InputOutputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class InputOutputModule { }
