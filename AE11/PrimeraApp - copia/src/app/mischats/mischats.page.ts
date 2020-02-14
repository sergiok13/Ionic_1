import { Component, OnInit } from '@angular/core';
import { InmobiliariaService } from '../services/Inmobiliaria.service';
import { IUSuarios } from '../interfaces';

@Component({
  selector: 'app-mischats',
  templateUrl: './mischats.page.html',
  styleUrls: ['./mischats.page.scss'],
})
export class MischatsPage implements OnInit {
  Usuarios: (IUSuarios[]) = [];
  constructor(private _inmobiliariaservice : InmobiliariaService) { }
 

  ngOnInit() {
    let ref2 = this._inmobiliariaservice.getUsuarios();
    ref2.once("value", snapshot => {
      snapshot.forEach(child =>{
        let value = child.val();    
        this.Usuarios.push(value); 
        //console.log("He encontrado" + child.val().Tipo);
        //console.log(this.prodMotor);
        //console.log("El id es" + this.id_Fire);
  })
})
}

}


