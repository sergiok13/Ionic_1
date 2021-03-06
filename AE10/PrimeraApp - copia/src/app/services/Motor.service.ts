import {Injectable} from '@angular/core';
import { IMotor } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class MotorService{
  /*  Motor : IMotor[]  = [
        {
          "Id" : 3,
          "Tipo" : "Motor",
          "Tipo_Vehiculo" : "Moto",
          "Anyo_Vehiculo" : 2017,
          "Kilometros_Recorridos" : 30000,
        },
        {
          "Id" : 5,
          "Tipo" : "Motor",
          "Tipo_Vehiculo" : "Coche",
          "Anyo_Vehiculo" : 2018,
          "Kilometros_Recorridos" : 32000,
        }
      ] */
    getProductos() : firebase.database.Reference{
        let ref =this._db.database.ref("Productos")
        return ref;
    }
      /*getMo(id : number) : IMotor{
        return this.Motor.find(x =>x.Id == id);
    }*/
    constructor(private _db: AngularFireDatabase){

    }
    setMotor(Motor : IMotor){
      let ref=this._db.database.ref("Productos");
      ref.push(Motor);
    }
}


  