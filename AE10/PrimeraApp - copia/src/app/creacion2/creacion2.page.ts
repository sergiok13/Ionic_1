import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotorService } from '../services/Motor.service';
@Component({
  selector: 'app-creacion2',
  templateUrl: './creacion2.page.html',
  styleUrls: ['./creacion2.page.scss'],
})
export class Creacion2Page implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _motorservice : MotorService) { }
  id : number;
  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    let Tipo_Vehiculo = this._activatedRoute.snapshot.paramMap.get('Tipo_Vehiculo');
    let Anyo = this._activatedRoute.snapshot.paramMap.get('Anyo_Vehiculo');
    let KMs = this._activatedRoute.snapshot.paramMap.get('Kilometros_Recorridos');

    //let res = this._motorservice.getMo(this.id);

    console.log('El Id de producto es: ' + this.id);
    console.log('Tipo de vehiculo: ' + Tipo_Vehiculo);
    console.log('Anyo del Vehiculo: ' + Anyo);
    console.log('Kilometros del Vehiculo: ' + KMs);
    /*console.log("El nombre es " + res.Id);
    console.log("El vehiculo es de tipo " + res.Tipo_Vehiculo);
    console.log("El vehiculo tiene" + res.Anyo_Vehiculo + "años");
    console.log("El vehiculo tiene " + res.Kilometros_Recorridos + "Kilometros recorridos");*/
  }

}
