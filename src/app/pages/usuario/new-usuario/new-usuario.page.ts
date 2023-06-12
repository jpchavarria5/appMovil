import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ResponseInterface } from 'src/app/models/response.interface';
import { UsuarioService } from 'src/app/services/api/usuario/usuario.service';
import { UsuarioInterface } from 'src/app/models/usuario.interface';
import { TipoDocumentoInterface } from 'src/app/models/tipo-documento.interface';
import { EstadoUsuarioInterface } from 'src/app/models/estado-usuario.interface';
import { RolInterface } from 'src/app/models/rol.interface';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.page.html',
  styleUrls: ['./new-usuario.page.scss'],
})
export class NewUsuarioPage implements OnInit {

  constructor(private router: Router, private api: UsuarioService,) { }

  newForm = new FormGroup({
    documentoUsuario: new FormControl(''),
    idTipoDocumento: new FormControl(''),
    nombreUsuario: new FormControl(''),
    apellidoUsuario: new FormControl(''),
    telefonoUsuario: new FormControl(''),
    correoUsuario: new FormControl(''),
    contrasenaUsuario: new FormControl(''),
    idRol: new FormControl(''),
    idEstado: new FormControl('1'),
  })

  tiposDocumento: TipoDocumentoInterface[] = []
  estadosUsuario: EstadoUsuarioInterface[] = [];
  rolUsuario: RolInterface[] = [];

  ngOnInit() {
    this.getTiposDocumento();
    this.getEstadosUsuario();
    this.getRolesUsuario();
  }

  postForm(form: UsuarioInterface) {
    this.api.postUsuario(form).subscribe(data => {
      let respuesta: ResponseInterface = data;
      if (respuesta.status == 'ok') {
        console.log('El usuario ha sido creado exitosamente.')
        /* this.alerts.showSuccess('El usuario ha sido creado exitosamente.', 'Usuario creado');*/
        this.router.navigate(['usuario/list-usuarios']);
      }
      else {
        console.log('Error al crear el usuario')
        /* this.alerts.showError(respuesta.msj, 'Error al crear el usuario'); */
      }
    });
  }

  getTiposDocumento(): void {
    this.api.getTipoDocumento().subscribe(
      (data: TipoDocumentoInterface[]) => {
        this.tiposDocumento = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getEstadosUsuario(): void {
    this.api.getEstadoUsuario().subscribe(
      (data: EstadoUsuarioInterface[]) => {
        this.estadosUsuario = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getRolesUsuario(): void {
    this.api.getRolUsuario().subscribe(
      (data: RolInterface[]) => {
        this.rolUsuario = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  goBack() {
    this.router.navigate(['usuario/list-usuarios']);
  }

}
