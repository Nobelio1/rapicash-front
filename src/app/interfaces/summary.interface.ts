export interface ISummary {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  celular: string;
  direccion: string;
  correo: string
  monto: string;
  situacion_nombre: string;
  empresa: string;
  cargo: string;
  //card
  estado:string;
  ingreso_mensual: string;
  plazo_original: string;
  plazo_restante: string;
  //Historial de Pagos
  pagos: IPagos[];
}

export interface IPagos {
  id: number;
  cuota: string;
  monto_ingresado: string;
  fecha_pago: string;
  fecha_vencimiento: string;
  estado: string;
}

export interface IPenalizacion {
  mora: string;
}


