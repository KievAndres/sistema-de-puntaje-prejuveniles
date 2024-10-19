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

export interface MiembroEquipo {
  idMiembroEquipo: string;
  nombreCompleto: string;
  apodo: string;
  fechaNacimiento?: string;
  fechaModificacion: string;
  esAyudante: boolean;
}

export interface Categoria {
  idCategoria: string;
  nombre: string;
  porcentaje: number;
  esBonus: boolean;
}

export interface SubCategoria {
  idSubCategoria: string;
  idCategoria: string;
  descripcion: string;
  porcentaje: number;
  esBonus: boolean;
}

export interface RegistroPuntaje {
  idRegistroPuntaje: string;
  idCategoria: string;
  idSubCategoria: string;
  idMiembroEquipo: string;
  porcentajeObtenido: number;
  fechaModificacion: string
}
