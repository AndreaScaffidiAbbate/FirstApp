import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {BindingsModule} from "../bindings/bindings.module";
import {DirectivesModule} from "../directives/directives.module";
import {InputOutputModule} from "../input-output/input-output.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BindingsModule,
    DirectivesModule,
    InputOutputModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
