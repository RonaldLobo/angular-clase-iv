import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';

@Component({
	selector: 'app-productos',
	templateUrl: './productos.component.html',
	styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
	public productos : Producto[];
	public updateProducto: Producto = new Producto();
	constructor(private productosService: ProductosService) { }

	ngOnInit() {
		this.productos = this.productosService.obtenerProductos();
	}

	public agregarProducto(producto:Producto){
		this.productosService.agregarProducto(producto);
		this.productos = this.productosService.obtenerProductos();
	}

	public setUpdateProducto(producto:Producto){
		this.updateProducto = Object.assign({},producto);
	}

	public editarProducto(producto:Producto){
		this.productosService.editarProducto(producto);
		this.productos = this.productosService.obtenerProductos();
	}
}
