import { AjoutUsersComponent } from './components/ajout-users/ajout-users.component';
import { DefaultComponent } from './components/layout/default/default.component';


import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
  
{path:'',component:DefaultComponent,
  children:[
    {path:'dashdoard',component:DashboardComponent}

  ]
},
  {path:'login',component:ConnexionComponent},
  {path:'inscription',component:AjoutUsersComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
