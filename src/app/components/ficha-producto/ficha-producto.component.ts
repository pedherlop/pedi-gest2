import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/model/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ficha-producto',
  templateUrl: './ficha-producto.component.html',
  styleUrls: ['./ficha-producto.component.css']
})
export class FichaProductoComponent implements OnInit {

  codigo: number;
  producto:Producto = undefined;
  private sub: any;

  constructor(private productoService: ProductoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.codigo = +params['codigo']; // + converts string 'id' no a number

        this.productoService.getByCodigo(this.codigo)
        .subscribe(
          producto => {
            this.producto = producto;
          },
          error => {
            console.log(error);
          }
        );
      }
    )
  }

  /*

  read(){
    this.productoService.getByCodigo(10).subscribe(
      producto => {
        this.producto = producto;
      }
    )
  }

  */

}
