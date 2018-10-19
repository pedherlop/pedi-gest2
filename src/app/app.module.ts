// Modulos
import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }                           from '@angular/core';
import { HttpClientModule }                   from '@angular/common/http';
import { AppRoutingModule }                   from './app-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ServiceWorkerModule }                from '@angular/service-worker';

// Modulos de material
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';
import { MatPaginatorModule }                 from '@angular/material/paginator';
import { MatFormFieldModule }                 from '@angular/material/form-field';
import { MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatSortModule }                     from '@angular/material';
import { MatMenuModule }                      from '@angular/material/menu';
import { LayoutModule }                       from '@angular/cdk/layout';

// Componentes
import { AppComponent }                       from './app.component';
import { ListadoCamarerosComponent }          from './components/listado_camareros/listado.camareros.component';
import { AltaProductoComponent }              from './components/alta_producto/alta.producto.component';
import { ListadoPedidosComponent }            from './components/listado-pedidos/listado-pedidos.component';
import { ListadoProductosPaginadoComponent }  from './components/listado_productos/listado.productos.paginado.component';
import { AboutComponent }                     from './components/about/about.component';
import { FichaProductoComponent }             from './components/ficha-producto/ficha-producto.component';
import { MyNavComponent }                     from './components/my-nav/my-nav.component';

// Servicios
import { CamareroService }                    from './services/camarero.service';
import { PedidoService }                      from './services/pedido.service';
import { ProductoService }                    from './services/producto.service';


// Environment?
import { environment }                        from '../environments/environment';





@NgModule({
  declarations: [
    AppComponent,
    ListadoCamarerosComponent,
    ListadoProductosPaginadoComponent,
    AltaProductoComponent,
    AboutComponent,
    ListadoPedidosComponent,
    FichaProductoComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule, // WTF?
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), // WTF?
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [CamareroService, ProductoService, PedidoService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
