import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CadastrosModule { }
