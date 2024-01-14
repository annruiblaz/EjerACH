import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {AutoraComponent} from "./components/autora/autora.component";
import {ErrorComponent} from "./components/error/error.component";
import {VillagerComponent} from "./components/villager/villager.component";
import {VillagersComponent} from "./components/villagers/villagers.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },{
  path:'inicio',
    component: InicioComponent
  },
/*  {
    path:'vecinos',
    component: VecinosComponent
  },*/
  {
    path:'autora',
    component: AutoraComponent
  },
  {path: 'vecino/:id',
  component: VillagerComponent}
  ,
  {
    path: 'vecinos',
    component: VillagersComponent
  }
  ,
  {
    path:'**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
