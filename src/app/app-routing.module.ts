import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "",
    redirectTo: "/pokemons",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
