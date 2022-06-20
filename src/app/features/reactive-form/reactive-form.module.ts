import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormComponent} from "./reactive-form.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes : Routes = [
  {path: '', component: ReactiveFormComponent}
]

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
