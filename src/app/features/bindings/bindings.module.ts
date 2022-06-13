import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path: '', component: BindingsComponent}
]

@NgModule({
    declarations: [
        BindingsComponent
    ],
    exports: [
        BindingsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class BindingsModule { }
