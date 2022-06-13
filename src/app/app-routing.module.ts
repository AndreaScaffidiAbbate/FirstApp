import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //EAGER LOADING
  // {path: 'home' , component: HomeComponent},
  // {path: 'bindings', component: BindingsComponent},
  // {path: 'directives', component: DirectivesComponent},
  // {path: 'inputOutput', component: InputOutputComponent},

  //LAZY LOADING
  {path: 'home', loadChildren: () => import('./features/home/home.module').then( m => m.HomeModule)},
  {path: 'bindings', loadChildren: () => import('./features/bindings/bindings.module').then(m => m.BindingsModule)},
  {path: 'directives', loadChildren: () => import('./features/directives/directives.module').then(m => m.DirectivesModule)},
  {path: 'inputOutput', loadChildren: ()=> import('./features/input-output/input-output.module').then(m => m.InputOutputModule)},
  {path: 'navigation', loadChildren: ()=> import('./features/navigation/navigation.module').then(m => m.NavigationModule)},
  {path: 'leonardo', loadChildren: () => import('./features/leonardo/leonardo.module').then(m => m.LeonardoModule)},
  {path: '**' , redirectTo: 'home', pathMatch: 'full'},
  {path: '' , redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
