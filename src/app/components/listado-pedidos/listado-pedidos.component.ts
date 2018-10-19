import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.css']
})
export class ListadoPedidosComponent implements OnInit {

  pedidos;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.read();
  }

  read() {
  
    this.pedidoService.getAll().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  
  }

}
