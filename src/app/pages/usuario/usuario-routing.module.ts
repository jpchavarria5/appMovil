import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsuariosPage } from './list-usuarios/list-usuarios.page';
import { NewUsuarioPage } from './new-usuario/new-usuario.page';

const routes: Routes = [
  { path: '', redirectTo: 'list-usuarios', pathMatch: 'full' },
  { path: 'list-usuarios', component: ListUsuariosPage },
  { path: 'new-usuario', component: NewUsuarioPage },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPageRoutingModule { }
