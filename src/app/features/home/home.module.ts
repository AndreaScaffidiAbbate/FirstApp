import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {BindingsModule} from "../bindings/bindings.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BindingsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
