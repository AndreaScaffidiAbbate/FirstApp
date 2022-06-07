import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {BindingsModule} from "../bindings/bindings.module";
import {DirectivesModule} from "../directives/directives.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BindingsModule,
    DirectivesModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
