export interface NavRoute {
  path: string;
  isActive: boolean;
  title: string;
}
export interface Tab {
  nombre: string;
  esActivo: boolean;
}

export interface CalificacionMaxima {
  id: string;
  valor: number;
}





export interface RegistroPuntaje {
  idRegistroPuntaje: string;
  idCategoria: string;
  idSubCategoria: string;
  idMiembroEquipo: string;
  porcentajeObtenido: number;
  fechaModificacion: string
}
