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

  oculto : boolean = false;
  brag: boolean = false;
  motor : boolean = false;
  inmobiliaria : boolean = false;
  tecnologia : boolean = false;
  nombre: string;
  estado: string = "Tecnologia";
  n_banyos : number;
  metros: number;
  habita: number;
  localidad: string;
  id: number;
  vehiculo : string = "Coche";
  anyo : number;
  km : number;
  estado_tecnologia : string = "Perfecto Estado";
  id_Fire: number;
  producto : string;
  Tipo : string;
  precio : number;

  constructor(private _activatedRoute: ActivatedRoute,private _inmobiliariaservice : InmobiliariaService) { }

  ngOnInit() {
    this.id=+this._activatedRoute.snapshot.paramMap.get('id');
    let ref2 = this._inmobiliariaservice.getProductos();
    ref2.orderByChild('Id').equalTo(this.id).once("value", snapshot=>{
      snapshot.forEach(child => {
        console.log(this.id);
        this.nombre=child.val().Nombre;
        this.Tipo=child.val().Tipo;
        this.producto=child.val().Descripcion;
        this.precio=child.val().precio;
      })
    })

  }

}
