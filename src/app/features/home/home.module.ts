import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {BindingsModule} from "../bindings/bindings.module";
import {DirectivesModule} from "../directives/directives.module";
import {InputOutputModule} from "../input-output/input-output.module";
import {SharedModule} from "../../shared/shared.module";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        BindingsModule,
        DirectivesModule,
        InputOutputModule,
        SharedModule,
        AppRoutingModule
    ],
  exports:[HomeComponent]
})
export class HomeModule { }
