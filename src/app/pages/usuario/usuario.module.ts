import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';
import { ListUsuariosPage } from './list-usuarios/list-usuarios.page';
import { NewUsuarioPage } from './new-usuario/new-usuario.page';

@NgModule({
  declarations: [
    ListUsuariosPage,
    NewUsuarioPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
})
export class UsuarioPageModule { }
