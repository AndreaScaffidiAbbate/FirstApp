import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputOutputComponent} from "./input-output.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [InputOutputComponent],
  exports: [
    InputOutputComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InputOutputModule { }
