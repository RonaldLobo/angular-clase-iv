import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuariosService {
	public usuarios: Usuario[] = [
		{
			nombre: 'Juan',
			apellido1: 'Lopez',
			correo: 'juan.lopez@gmail.com'
		},
		{
			nombre: 'Pedro',
			apellido1: 'Perez',
			correo: 'pedro.perez@gmail.com'
		},
		{
			nombre: 'Raul',
			apellido1: 'García',
			correo: 'raul.garcia@gmail.com'
		},
	]
	
	constructor() { }

	public obtenerUsuarios(){
		return this.usuarios;
	}

	public agregarUsuario(usuario:Usuario){
		this.usuarios.push(usuario);
	}

}
