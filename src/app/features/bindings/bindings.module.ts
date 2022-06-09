import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
    declarations: [
        BindingsComponent
    ],
    exports: [
        BindingsComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class BindingsModule { }
