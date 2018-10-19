import { Component, OnInit }                from '@angular/core';
import { PageEvent }                        from '@angular/material';
import { ProductoService }                  from 'src/app/services/producto.service';
import { Pagina }                           from 'src/app/model/pagina';

@Component({
    selector: 'listado-productos-paginado',
    templateUrl: './listado.productos.paginado.component.html',
    styleUrls: ['./listado.productos.paginado.component.css']
  })
export class ListadoProductosPaginadoComponent implements OnInit {
    
    pagina:Pagina = undefined;                  // Nuestra página
    
    pageSize = 10;                              // El valor inicial es 10
    pageSizeOptions: number[] = [5, 10, 25];

    constructor(private productoService: ProductoService){}

    ngOnInit(): void {
        this.getPageFromBackend(0, this.pageSize);
    }

    getServerData(evento:PageEvent) {
        this.pageSize = evento.pageSize;
        this.getPageFromBackend(evento.pageIndex, this.pageSize);
    }

    getPageFromBackend (pageNumber: number, pageSize: number): void {
        this.productoService.getPage(pageNumber , pageSize)
        .subscribe(pagina => {
            this.pagina = pagina;
        });
    }
}