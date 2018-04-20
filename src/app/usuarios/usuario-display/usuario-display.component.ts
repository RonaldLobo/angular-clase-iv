import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
	selector: 'app-usuario-display',
	templateUrl: './usuario-display.component.html',
	styleUrls: ['./usuario-display.component.css']
})
export class UsuarioDisplayComponent implements OnInit {
	@Input() usuario : Usuario;
	
	constructor() { }

	ngOnInit() {
	}

}
