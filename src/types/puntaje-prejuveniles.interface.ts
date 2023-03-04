export interface PuntajeRegla {
  idPuntaje: string;
  descripcion: string;
  puntajeAsignado: number;
  fechaModificacion: Date;
}

export interface MiembroEquipo {
  idMiembroEquipo: string;
  nombreCompleto: string;
  fechaNacimiento: Date;
  esAyudante: boolean;
  fechaModificacion: Date;
}

export interface Juego {
  idJuego: string;
  nombre: string;
  descripcion: string;
  puntajePrimerLugar: number;
  puntajeSegundoLugar: number;
  puntajeTercerLugar: number;
  esIndividual: boolean;
  cantidadEquipos: number;
  fechaModificacion: Date;
}

export interface RegistroPuntaje {
  idRegistroPuntaje: string;
  idPuntaje: string;
  idEvento: string;
  idMiembroEquipo: string;
  fechaModificacion: Date;
}