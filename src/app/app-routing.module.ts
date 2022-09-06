
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { LoginComponent } from './telas/login/login.component';
import { HomeComponent } from './templetes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastro',component: CadastroComponent},
  {path:'perfilusuario', loadChildren: ()=> import('./usuarios/usuarios.module').then(m => m.UsuariosModule)},
  {path:'consultas', loadChildren: ()=> import('./consultas/consultas.module').then(m => m.ConsultasModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
