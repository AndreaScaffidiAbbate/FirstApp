import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule, Routes} from "@angular/router";
import { DetailsComponent } from './details/details.component';
import {ExtraComponent} from "./extra/extra.component";

const routes : Routes = [
  {path: '', component: NavigationComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'extra', component: ExtraComponent}
]


@NgModule({
  declarations: [
    NavigationComponent,
    DetailsComponent,
    ExtraComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NavigationModule { }
