import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {BindingsComponent} from "./features/bindings/bindings.component";
import {InputOutputComponent} from "./features/input-output/input-output.component";
import {DirectivesComponent} from "./features/directives/directives.component";

const routes: Routes = [

  {path: 'home' , component: HomeComponent},
  {path: 'bindings', component: BindingsComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'inputOutput', component: InputOutputComponent},
  {path: '**' , redirectTo: 'home', pathMatch: 'full'},
  {path: '' , redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
