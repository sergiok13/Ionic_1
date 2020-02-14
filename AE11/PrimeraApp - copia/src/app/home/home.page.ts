import { Component, ɵConsole } from '@angular/core';
import { Ibocadillo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { InmobiliariaService } from '../services/Inmobiliaria.service';

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

  Productos: (IInmobiliaria[] | Ibocadillo[] | ITecnologia[] | IMotor[]) = [];

  prodMotor2: (Ibocadillo[] | IMotor[] | IInmobiliaria[] | ITecnologia[] ) = [];
  constructor(  private _inmobiliariaservice : InmobiliariaService) {}
  borrar(id : number){
    console.log("Borrado");
    let ref2 = this._inmobiliariaservice.getProductos();
    ref2.orderByChild('Id').equalTo(id).once("value", snapshot=>{
      snapshot.forEach(child => {
        var value = child.key;
        ref2.child(value).remove();
      })
    })
  }
  ngOnInit(){
    //this.Inmobiliaria = this._inmobiliariaservice.getInmobiliaria();
    let ref2 = this._inmobiliariaservice.getProductos();
    ref2.once("value", snapshot => {
      snapshot.forEach(child =>{
        let value = child.val();
         this.id_Fire = child.val().Id;
        this.Productos.push(value);
        //console.log("He encontrado" + child.val().Tipo);
        //console.log(this.prodMotor);
        console.log("El id es" + this.id_Fire);
      })
    });

    //this.Tecnologia = this._tecnologiaservice.getTecnologia();
  }
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
    console.log(this.estado);
    if(this.estado==="Tecnologia"){
      let Tecnologia :(Ibocadillo | ITecnologia) =({"Id": this.Productos.length+1,
                          "Tipo" : "Tecnologia",
                          "Estado_Producto" : this.estado_tecnologia,
                          "Nombre" : this.nombre,
                          "Precio" : 50,
                          "Descripcion" : this.producto,
  });
    this.id_Fire += 1;
    this._inmobiliariaservice.setProductos(Tecnologia);
    console.log("Se ha insertado un nuevo elemento en el array");
    console.log(this.Productos.length);
    }
    else if(this.estado==="Motor"){
      console.log(this.vehiculo)
      let Motor: (Ibocadillo | IMotor)=({"Id": this.Productos.length+1,
        "Tipo" : "Motor",
        "Tipo_Vehiculo" : this.vehiculo,
        "Anyo_Vehiculo" : this.anyo,
        "Kilometros_Recorridos" : this.km,
        "Nombre" : this.nombre,
        "Precio" : 50,
        "Descripcion" : this.producto,
  });
    this.id_Fire += 1;
    this._inmobiliariaservice.setProductos(Motor);
    console.log("Se ha insertado un nuevo elemento en el array");
    }
    else if(this.estado==="Inmobiliaria"){
      let inmobiliaria: (Ibocadillo | IInmobiliaria)=({"Id": this.Productos.length+1,
        "Tipo" : "Inmobiliaria",
        "Metros_Cuadrados" : this.metros,
        "Habitaciones" : this.habita,
        "Banyos" : this.n_banyos,
        "Localidad" : this.localidad,
        "Nombre" : this.nombre,
        "Precio" : 50,
        "Descripcion" : this.producto,
  });
    this.id_Fire + 1;
    this._inmobiliariaservice.setProductos(inmobiliaria);
    }
  
  }
  insertarInmo() {
    
  }
  insertarMotor() {
    
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

