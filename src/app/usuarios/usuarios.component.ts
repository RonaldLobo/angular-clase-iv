import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
	public usuarios : Usuario[];

	constructor(private usuariosService:UsuariosService) { }

	ngOnInit() {
		this.usuarios = this.usuariosService.obtenerUsuarios();
	}

	agregarUsuario(usuario:Usuario){
		this.usuariosService.agregarUsuario(usuario);
	}

}
