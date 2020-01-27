import {Injectable} from '@angular/core';
import {IInmobiliaria} from '../interfaces';

@Injectable()
export class InmobiliariaService{

    inmobiliaria: IInmobiliaria[] = [
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
      } 
}

    