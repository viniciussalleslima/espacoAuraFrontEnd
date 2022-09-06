import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { PerfilusuarioComponent } from './perfilusuario/perfilusuario.component';



@NgModule({
  declarations: [
    PerfilusuarioComponent,

  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
