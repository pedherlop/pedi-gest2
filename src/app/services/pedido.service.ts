import { Injectable }           from "@angular/core";
import { HttpClient }           from '@angular/common/http';
import { Observable }           from "rxjs";
import { Pedido }               from "../model/pedido";


@Injectable()
export class PedidoService {
    
    URL = 'https://pedi-gest.herokuapp.com/api/pedidos';
          
    constructor(private http:HttpClient){

    }
    
    getAll(): Observable<Pedido> {
        return this.http.get<Pedido>(this.URL);
    }
     
}