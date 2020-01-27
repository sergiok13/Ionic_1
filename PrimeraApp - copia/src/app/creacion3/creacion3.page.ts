import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TecnologiaService } from '../services/Tecnologia.service';

@Component({
  selector: 'app-creacion3',
  templateUrl: './creacion3.page.html',
  styleUrls: ['./creacion3.page.scss'],
})
export class Creacion3Page implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,  private _tecnologiaService : TecnologiaService) { }
  id : number;
  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    let estado_procucto = this._activatedRoute.snapshot.paramMap.get('Estado_Producto');
    
    let res = this._tecnologiaService.getTecno(this.id);

    console.log('El Id de producto es: ' + this.id);
    console.log('Estado del producto: ' + estado_procucto);
    console.log("El nombre es " + res.Id);
    console.log("El estado del producto es " + res.Estado_Producto);
    
  }
}
