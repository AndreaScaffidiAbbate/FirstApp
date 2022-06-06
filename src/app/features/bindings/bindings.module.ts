import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings.component';
import {FormsModule} from "@angular/forms";



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
