import { Component, OnInit } from '@angular/core';
import { Ibocadillo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { InmobiliariaService } from '../services/Inmobiliaria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  oculto : boolean = false;
  brag: boolean = false;
  motor : boolean = false;
  inmobiliaria : boolean = false;
  tecnologia : boolean = false;
  nombre: string;
  estado: string = "Tecnologia";
  n_banyos : number;
  metros: number;
  habita: number;
  localidad: string;
  id: number;
  vehiculo : string = "Coche";
  anyo : number;
  km : number;
  estado_tecnologia : string = "Perfecto Estado";
  id_Fire: number;
  producto : string;
  Tipo : string;
  precio : number;

  Productos: (IInmobiliaria[] | Ibocadillo[] | ITecnologia[] | IMotor[]) = [];

  prodMotor2: (Ibocadillo[] | IMotor[] | IInmobiliaria[] | ITecnologia[] ) = [];
  constructor(  private _inmobiliariaservice : InmobiliariaService, private _activatedRoute: ActivatedRoute) {}
  cambiar_oculto() : void{
    this.oculto = !this.oculto; 
  }
  cambiar_tecnologia() : void {
    this.tecnologia = !this.tecnologia;
    this.motor = false;
    this.inmobiliaria = false;
    this.estado="Tecnologia";
  }
  cambiar_motor() : void {
    this.motor = !this.motor;
    this.inmobiliaria = false;
    this.tecnologia = false;
    this.estado="Motor";
  }
  cambiar_inmobiliaria() : void {
    this.inmobiliaria = !this.inmobiliaria;
    this.motor = false;
    this.tecnologia = false;
    this.estado="Inmobiliaria";
  }
  insertar() {
    let ref2 = this._inmobiliariaservice.getProductos();
    console.log(this.estado);
    if(this.estado==="Tecnologia"){
      let Tecnologia :(Ibocadillo | ITecnologia) =({"Id": this.id,
                          "Tipo" : "Tecnologia",
                          "Estado_Producto" : this.estado_tecnologia,
                          "Nombre" : this.nombre,
                          "Precio" : 50,
                          "Descripcion" : this.producto,
  });
    this.id_Fire += 1;
    ref2.orderByChild('Id').equalTo(this.id).once("value",snapshot => {
      snapshot.forEach(child => {
        ref2.child(child.key).set(Tecnologia);
      })
    })
    
    console.log("Se ha insertado un nuevo elemento en el array");
    console.log(this.Productos.length);
    }
    else if(this.estado==="Motor"){
      console.log(this.vehiculo)
      let Motor: (Ibocadillo | IMotor)=({"Id": this.id,
        "Tipo" : "Motor",
        "Tipo_Vehiculo" : this.vehiculo,
        "Anyo_Vehiculo" : this.anyo,
        "Kilometros_Recorridos" : this.km,
        "Nombre" : this.nombre,
        "Precio" : 50,
        "Descripcion" : this.producto,
  });
    ref2.orderByChild('Id').equalTo(this.id).once("value",snapshot => {
    snapshot.forEach(child => {
      ref2.child(child.key).set(Motor);
    })
  })
    console.log("Se ha insertado un nuevo elemento en el array");
    }
    else if(this.estado==="Inmobiliaria"){
      let inmobiliaria: (Ibocadillo | IInmobiliaria)=({"Id": this.id,
        "Tipo" : "Inmobiliaria",
        "Metros_Cuadrados" : this.metros,
        "Habitaciones" : this.habita,
        "Banyos" : this.n_banyos,
        "Localidad" : this.localidad,
        "Nombre" : this.nombre,
        "Precio" : 50,
        "Descripcion" : this.producto,
  });
    ref2.orderByChild('Id').equalTo(this.id).once("value",snapshot => {
    snapshot.forEach(child => {
      ref2.child(child.key).set(inmobiliaria);
    })
  })
    this.id_Fire + 1;
    }
  
  }
  ngOnInit() {
    this.id=+this._activatedRoute.snapshot.paramMap.get('id');
    let ref2 = this._inmobiliariaservice.getProductos();
    ref2.orderByChild('Id').equalTo(this.id).once("value", snapshot=>{
      snapshot.forEach(child => {
        console.log(this.id);
        this.nombre=child.val().Nombre;
        this.Tipo=child.val().Tipo;
        this.producto=child.val().Descripcion;
        this.precio=child.val().precio;
      })
    })
  }
  insertarPerfEstado(){
    this.estado_tecnologia = "Producto en perfecto estado";
  }
  insertarUsado(){
    this.estado_tecnologia = "Producto usado";
  }
  insertarMoto(){
    this.vehiculo = "Moto";
  }
  insertarCoche(){
    this.vehiculo = "Coche";
  }
}
