import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {InmobiliariaService} from '../services/Inmobiliaria.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-creacion1',
  templateUrl: './creacion1.page.html',
  styleUrls: ['./creacion1.page.scss'],
})
export class Creacion1Page implements OnInit {

  id : number;
  constructor(private _activatedRoute: ActivatedRoute,private _inmobiliariaservice : InmobiliariaService) { }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    let metros = this._activatedRoute.snapshot.paramMap.get('Metros');
    let habitaciones = this._activatedRoute.snapshot.paramMap.get('Habitaciones');
    let banyos = this._activatedRoute.snapshot.paramMap.get('Metros');
    console.log("Nivel ID:" + this.id)
    console.log("Numero de metros:" + metros)
    console.log("Numero de habitaciones:" + habitaciones)
    console.log("Numero de baños:" + banyos)
    let res = this._inmobiliariaservice.getInmo(this.id);
    console.log("Tiene " + res.Metros_Cuadrados + "metros cuadrados");
    console.log("Tiene " + res.Habitaciones + "habitaciones");
    console.log("Tiene" + res.Banyos + "Banyos");
    
  }

}
