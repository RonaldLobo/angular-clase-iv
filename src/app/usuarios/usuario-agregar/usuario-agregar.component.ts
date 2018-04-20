import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { patternValidator } from '../../shared/pattern-validator';

@Component({
	selector: 'app-usuario-agregar',
	templateUrl: './usuario-agregar.component.html',
	styleUrls: ['./usuario-agregar.component.css']
})
export class UsuarioAgregarComponent implements OnInit {
	@Output() agregarUsuario = new EventEmitter<Usuario>();
	public usuarioForm: FormGroup;
	public usuario: Usuario = new Usuario();
	public submitted: boolean = false;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.usuarioForm = this.formBuilder.group({
			nombre: new FormControl('', [
				Validators.required, 
				Validators.minLength(2), 
				Validators.maxLength(7)
			]),
			apellido1: new FormControl('', [Validators.required]),
			correo: new FormControl('', [Validators.required,patternValidator(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)])
		});
	}

	onSubmit() {
		this.agregarUsuario.emit(this.usuarioForm.value);
		this.usuarioForm.reset();
		this.submitted = true; 
	}

	revert(){
		this.usuarioForm.reset();
		this.submitted = false;
	}

}
