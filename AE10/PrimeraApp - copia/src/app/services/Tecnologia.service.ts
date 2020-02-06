import {Injectable} from '@angular/core';
import {ITecnologia} from '../interfaces';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable()
export class TecnologiaService{
    /*Tecnologia : ITecnologia[] = [
        {
          "Id" : 4,
          "Tipo" : "Tecnologia",
          "Estado_Producto" : "Usado",
        },
      ]
      getTecnologia() : ITecnologia[]{
        return this.Tecnologia;
      }
      getTecno(id : number) : ITecnologia{
        return this.Tecnologia.find(x =>x.Id == id);
    } */
    getProductos() : firebase.database.Reference{
      let ref =this._db.database.ref("Productos")
      return ref;
  }
    constructor(private _db: AngularFireDatabase){

    }
    setTecnologia(Tecnologia : ITecnologia){
      let ref=this._db.database.ref("Productos");
      ref.push(Tecnologia);
    }
}