import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "../app-routing.module";
import { FooterComponent } from './footer/footer.component';
import {MatTreeModule} from '@angular/material/tree';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTreeModule
  ]
})
export class CoreModule { }
