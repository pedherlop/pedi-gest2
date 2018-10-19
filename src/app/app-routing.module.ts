import { NgModule }                             from '@angular/core';
import { RouterModule, Routes }                 from '@angular/router';
import { AltaProductoComponent }                from './components/alta_producto/alta.producto.component';
import { ListadoCamarerosComponent }            from './components/listado_camareros/listado.camareros.component';
import { ListadoProductosPaginadoComponent }    from './components/listado_productos/listado.productos.paginado.component';
import { AboutComponent }                       from './components/about/about.component';
import { ListadoPedidosComponent }              from './components/listado-pedidos/listado-pedidos.component';
import { FichaProductoComponent }               from './components/ficha-producto/ficha-producto.component';

const routes: Routes = [

    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'altaproducto', component: AltaProductoComponent },
    { path: 'listadocamareros', component: ListadoCamarerosComponent },
    { path: 'listadopedidos', component: ListadoPedidosComponent },
    { path: 'paginaproductos', component: ListadoProductosPaginadoComponent },
    { path: 'detalles/:codigo', component: FichaProductoComponent },
    { path: '**', component: AboutComponent } //404 todo component
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}



