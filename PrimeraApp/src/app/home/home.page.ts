import { Component } from '@angular/core';
import { Ibocadillo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  oculto : boolean = false;
  brag: boolean = false;
  motor : boolean = false;
  inmobiliaria : boolean = false;
  tecnologia : boolean = false;
  nombre: string;
  estado: string;
  
  n_banyos : number;
  metros: number;
  habita: number;
  localidad: string;

  vehiculo : string;
  anyo : number;
  km : number;
  constructor() {}

  cambiar_oculto() : void{
    this.oculto = !this.oculto; 
  }
  cambiar_tecnologia() : void {
    this.tecnologia = !this.tecnologia;
    this.motor = false;
    this.inmobiliaria = false;
  }
  cambiar_motor() : void {
    this.motor = !this.motor;
    this.inmobiliaria = false;
    this.tecnologia = false;
  }
  cambiar_inmobiliaria() : void {
    this.inmobiliaria = !this.inmobiliaria;
    this.motor = false;
    this.tecnologia = false;
  }
  
  insertar() {
    this.Tecnologia.push({"Id": this.Tecnologia.length+this.Motor.length+this.Inmobiliaria.length+1,
                          "Tipo" : "Tecnologia",
                          "Estado_Producto" : this.estado,
  });
  console.log("Se ha insertado un nuebo elemento en el array");
  }
  insertarInmo() {
    this.Inmobiliaria.push({"Id": this.Tecnologia.length+this.Motor.length+this.Inmobiliaria.length+1,
    "Tipo" : "Inmobiliaria",
    "Metros_Cuadrados" : this.metros,
    "Habitaciones" : this.habita,
    "Banyos" : this.n_banyos,
    "Localidad" : this.localidad,
  });
  }
  insertarMotor() {
    this.Motor.push({"Id": this.Tecnologia.length+this.Motor.length+this.Inmobiliaria.length+1,
    "Tipo" : "Inmobiliaria",
    "Tipo_Vehiculo" : this.vehiculo,
    "Anyo_Vehiculo" : this.anyo,
    "Kilometros_Recorridos" : this.km,
  });
  }

  insertarPerfEstado(){
    this.estado = "Producto en perfecto estado";
  }
  insertarUsado(){
    this.estado = "Producto usado";
  }
  insertarMoto(){
    this.vehiculo = "Moto";
  }
  insertarCoche(){
    this.vehiculo = "Coche";
  }

  Inmobiliaria: (IInmobiliaria[]) = [
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

  Motor : IMotor[] =[
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
  Tecnologia : (ITecnologia[] | Ibocadillo[]) =[
    {
      "Id" : 4,
      "Tipo" : "Tecnologia",
      "Estado_Producto" : "Usado",
    },
  ]
}

