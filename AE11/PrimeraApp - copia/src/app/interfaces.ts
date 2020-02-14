export interface Ibocadillo{
    "Id" : number,
    "Tipo" : string,
    "Nombre" : string,
    "Precio" : number,
    "Descripcion" : string, 
}
export interface IInmobiliaria extends Ibocadillo{
    "Metros_Cuadrados" : number,
    "Habitaciones" : number,
    "Banyos" : number,
    "Localidad" : string,
}
export interface ITecnologia extends Ibocadillo{
    "Estado_Producto" : string,
}
export interface IMotor extends Ibocadillo{
    "Tipo_Vehiculo" : string,
    "Anyo_Vehiculo" : number,
    "Kilometros_Recorridos" : number,
}
export interface IUSuarios{
    "Nombre" : string,
    "Contrasenya" : string,
    "Correo" : string
}