import {Injectable} from '@angular/core';
import {IInmobiliaria} from '../interfaces';
import { IMotor } from '../interfaces';
import { ITecnologia } from '../interfaces';
import {AngularFireDatabase} from '@angular/fire/database';
import { Ibocadillo } from '../interfaces';
import { read } from 'fs';
@Injectable()
export class InmobiliariaService{

    /*inmobiliaria: IInmobiliaria[] = [
        {
          "Id" : 1,
          "Tipo" : "Inmobiliaria",
          "Metros_Cuadrados" : 70,
          "Habitaciones" : 2,
          "Banyos" : 1,
          "Localidad" : "Catarroja",
        },
        {
          "Id" : 2,
          "Tipo" : "Inmobiliaria",
          "Metros_Cuadrados" : 95,
          "Habitaciones" : 3,
          "Banyos" : 2,
          "Localidad" : "Benetusser",
        },
    
      ]
      getInmobiliaria() : IInmobiliaria[]{
          return this.inmobiliaria;
      }
      getInmo(id : number) : IInmobiliaria{
          return this.inmobiliaria.find(x =>x.Id == id);
      } */
      /*getProductos() : firebase.database.Reference{
        let ref =this._db.database.ref("Productos")
        return ref;
    }*/
      constructor(private _db: AngularFireDatabase){

      }
      /*setInmobiliaria(Inmobiliaria : IInmobiliaria){
        let ref=this._db.database.ref("Productos");
        ref.push(Inmobiliaria);
      }
      setMotor(Motor : IMotor){
        let ref=this._db.database.ref("Productos");
        ref.push(Motor);
      }
      setTecnologia(Tecnologia : ITecnologia){
        let ref=this._db.database.ref("Productos");
        ref.push(Tecnologia);
      }*/

      
      setProductos(Productos : Ibocadillo){
        let ref=this._db.database.ref("Productos");
        ref.push(Productos);
      }
      
    getProductos() : firebase.database.Reference{
        let ref =this._db.database.ref("Productos")
        return ref;
    }
    getUsuarios() : firebase.database.Reference{
      let ref=this._db.database.ref("Usuarios")
      return ref;
    }
}

    