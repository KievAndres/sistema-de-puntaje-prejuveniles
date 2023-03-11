export interface MiembroPuntajeTotal {
  nombreCompleto: string;
  esAyudante: boolean;
  puntajeTotal: number;
}

export interface MiembroPuntajePorMes {
  nombreCompleto: string;
  esAyudante: boolean;
  puntajeTotal: number;
  mes: number;
}

export interface Miembro {
  idMiembroEquipo: string;
  nombreCompleto: string;
  esAyudante: boolean;
}

export interface MiembroAsistenciaPuntualidad extends Miembro {
  puntualidad: boolean;
  asistencia: boolean;
}