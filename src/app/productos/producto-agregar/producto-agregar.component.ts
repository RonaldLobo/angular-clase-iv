import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';
 
@Component({
	selector: 'app-producto-agregar',
	templateUrl: './producto-agregar.component.html',
	styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit, OnChanges {
	@Output() agregarProducto = new EventEmitter<Producto>();
	@Output() editarProducto = new EventEmitter<Producto>();
	@Input() producto : Producto = new Producto();
	submitted = false;
	isUpdating = false;
	requiredText : string = 'producto';

	onSubmit() {
		if(this.isUpdating){
			console.log('editing');
			this.editarProducto.emit(this.producto);
		} else {
			this.agregarProducto.emit(this.producto);
		}
		this.submitted = true; 
	}

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes){
		console.log('changes',changes);
		if(changes.producto && changes.producto.currentValue.nombre){
			this.isUpdating = true;
		}
	}

	newProducto(precio){
		this.submitted = false; 
		this.isUpdating = false;
		this.producto = new Producto();
	}

}
