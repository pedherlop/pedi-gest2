import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/model/producto';


@Component({
    selector: 'alta-producto',
    templateUrl: './alta.producto.component.html',
    styleUrls: ['./alta.producto.component.css']
})
export class AltaProductoComponent implements OnInit {

    producto: Producto = new Producto();
    errorMessage: any;

    constructor(private productoService: ProductoService) { }

    ngOnInit(): void {
        this.producto = new Producto();
    }

    create() {
        this.productoService.create(this.producto)
            .subscribe(
                producto => {
                    console.log(producto);
                    this.producto = new Producto();
                    //this.router.navigate(['list']); //  navegación programática
                },
                error => {
                    console.log(error);
                    this.errorMessage = error;
                }
            );

    }
}