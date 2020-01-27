import {Injectable} from '@angular/core';
import {ITecnologia} from '../interfaces';

@Injectable()
export class TecnologiaService{
    Tecnologia : ITecnologia[] = [
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
    } 

}