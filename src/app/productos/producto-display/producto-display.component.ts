import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-display',
  templateUrl: './producto-display.component.html',
  styleUrls: ['./producto-display.component.css']
})
export class ProductoDisplayComponent implements OnInit {
	@Input() producto : Producto;

	constructor() { }

	ngOnInit() {
		
	}

}
