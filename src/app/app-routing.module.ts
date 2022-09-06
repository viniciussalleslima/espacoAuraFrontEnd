

import { HomeComponent } from './templetes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'perfilusuario', loadChildren: ()=> import('./usuarios/usuarios.module').then(m => m.UsuariosModule)},
  {path:'consultas', loadChildren: ()=> import('./consultas/consultas.module').then(m => m.ConsultasModule)},
  {path:'cadastro', loadChildren: () => import('./cadastros/cadastros.module').then(m => m.CadastrosModule)},
  {path:'login', loadChildren: ()=> import('./logins/logins.module').then(m=> m.LoginsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
