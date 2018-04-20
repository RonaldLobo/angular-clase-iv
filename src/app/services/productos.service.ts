import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable()
export class ProductosService {
	public productos: Producto[] = [
		{
			_id: 1,
			nombre: 'lata producto',
			precio: 2000,
			descripcion: 'lata de Atún marca Sardimar'
		},
		{
			_id: 2,
			nombre: 'arroz producto',
			precio: 1000,
			descripcion: 'paquete de arroz Indiana'
		},
		{
			_id: 3,
			nombre: 'telefono producto',
			precio: 70000,
			descripcion: 'teléfono marca LG'
		}
	]
	
	constructor() { }

	public obtenerProductos(){
		return this.productos;
	}

	public agregarProducto(producto:Producto){
		producto._id = Math.floor((Math.random() * 100) + 1);
		this.productos.push(producto);
	}

	public editarProducto(producto:Producto){
		this.productos = this.productos.map(function(item) { return item._id === producto._id ? Object.assign({},producto) : item; });
	}
}
