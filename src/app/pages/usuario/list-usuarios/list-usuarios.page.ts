import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.page.html',
  styleUrls: ['./list-usuarios.page.scss'],
})
export class ListUsuariosPage implements OnInit {

  users: any = [];
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    console.log('Hola mundo');
    this.getUsuarios().subscribe(res => {
      console.log('Res', res);
      this.users = res;
    });
    /* this.getUsuarios(); */
  }

  home() {
    this.router.navigate(['/home'])
  }

  getUsuarios() {
    return this.http.get('http://192.168.1.6:3030/usuario').pipe(map((res: any) => {
      return res;
    }));
    /* return this.http.get('http://localhost:3030/usuario').pipe(map(res => res)).subscribe(data => {
      console.log(data);
    }); */
  }

  newUsuario() {
    this.router.navigate(['/usuario/new-usuario']);
  }

}
