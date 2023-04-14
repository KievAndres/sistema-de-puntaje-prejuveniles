export interface NavRoute {
  path: string;
  isActive: boolean;
  title: string;
}
export interface Tab {
  nombre: string;
  esActivo: boolean;
}
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


export interface MiembroRegistroRegla extends Miembro {
  registroPuntajeRegla: RegistroPuntajeRegla[];
}

export interface PuntajeRegla {
  idPuntajeRegla: string;
  descripcion: string;
}

export interface RegistroPuntajeRegla extends PuntajeRegla {
  cumplePuntajeRegla: boolean;
}
