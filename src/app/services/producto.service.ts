import { Injectable }                               from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams }      from '@angular/common/http';
import { Observable }                               from "rxjs";
import { Producto }                                 from "../model/producto";
import { Pagina }                                   from "../model/pagina";

@Injectable()
export class ProductoService {

    URL = 'https://pedi-gest.herokuapp.com/api/productos';

    constructor(private http: HttpClient){

    }
    
    getPage(page:number, size:number): Observable<Pagina> {
        const params = new HttpParams().set("page",String(page)).set("size",String(size));
        return this.http.get<Pagina>(this.URL,{params});
    }

    getByCodigo(codigo:number): Observable<Producto> {
        return this.http.get<Producto>(this.URL + "/" + String(codigo));
    }

    create(producto:Producto): Observable<Producto> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.post<Producto>(this.URL, producto, httpOptions);
    }
    
}