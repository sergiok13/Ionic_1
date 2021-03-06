import {Injectable} from '@angular/core';
import { IMotor } from '../interfaces';

@Injectable()
export class MotorService{
    Motor : IMotor[]  = [
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
      ]
      getMotor() : IMotor[]{
        return this.Motor;
      }
      getMo(id : number) : IMotor{
        return this.Motor.find(x =>x.Id == id);
    } 
}


  