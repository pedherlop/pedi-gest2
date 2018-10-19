import { Injectable }           from "@angular/core";
import { HttpClient }           from '@angular/common/http';
import { Camarero }             from '../model/camarero';
import { Observable }           from "rxjs";


@Injectable()
export class CamareroService {

    URL = 'https://pedi-gest.herokuapp.com/api/camareros';
          
    constructor(private http:HttpClient){

    }

    getAll(): Observable<Camarero> {
        return this.http.get<Camarero>(this.URL);
    }

}