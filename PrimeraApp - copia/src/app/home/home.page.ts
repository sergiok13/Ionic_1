import { Component } from '@angular/core';
import { Ibocadillo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { InmobiliariaService } from '../services/Inmobiliaria.service';
import { MotorService } from '../services/Motor.service';
import { TecnologiaService } from '../services/Tecnologia.service';

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
  

  constructor(  private _inmobiliariaservice : InmobiliariaService, private _motorservice : MotorService, private _tecnologiaservice : TecnologiaService) {}

  ngOnInit(){
    this.Inmobiliaria = this._inmobiliariaservice.getInmobiliaria();
    this.Motor = this._motorservice.getMotor();
    this.Tecnologia = this._tecnologiaservice.getTecnologia();
  }
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

  Inmobiliaria: (IInmobiliaria[]);

  Motor : (IMotor[]);
  Tecnologia : (ITecnologia[] | Ibocadillo[]);
}

