import { Component, OnInit }                from '@angular/core';
import { CamareroService }                  from 'src/app/services/camarero.service';

@Component({
    selector: 'app-root',
    templateUrl: './listado.camareros.component.html',
    styleUrls: ['./listado.camareros.component.css']
  })
export class ListadoCamarerosComponent implements OnInit {

  camareros;

  constructor(private camareroService: CamareroService){}

  ngOnInit(): void {
    this.read();
  }

  read() {
    this.camareroService.getAll().subscribe(camareros => {
      this.camareros = camareros;
    });
  }

}