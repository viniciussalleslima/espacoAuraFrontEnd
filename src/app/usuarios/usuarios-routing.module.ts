
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilusuarioComponent } from './perfilusuario/perfilusuario.component';

const routes: Routes = [
  {path:'', component: PerfilusuarioComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
