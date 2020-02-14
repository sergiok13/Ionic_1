import { Component, OnInit } from '@angular/core';
import { IUSuarios } from '../interfaces';

@Component({
  selector: 'app-dentro-chat',
  templateUrl: './dentro-chat.page.html',
  styleUrls: ['./dentro-chat.page.scss'],
})
export class DentroChatPage implements OnInit {
  nombre: string;
  correo: string;
  contrasenya: string;

  constructor() { }

  ngOnInit() {
  }
  insertar() {
    
    
      let Usuarios : IUSuarios =({"Nombre": this.nombre,
                          "Contrasenya" : this.contrasenya,
                          "Correo" : this.correo,
                          
                          
  });

  }
}
