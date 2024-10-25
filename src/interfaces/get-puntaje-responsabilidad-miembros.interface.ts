export interface GetResponsabilidadSubCategoria {
  idSubCategoria: string;
  idCategoria: string;
  descripcion: string;
  esBonus: boolean;
}

export interface GetResponsabilidadRegistroPuntaje {
  idRegistroPuntaje: string;
  porcentajeObtenido: number;
  fechaModificacion: string;
  SubCategoria: GetResponsabilidadSubCategoria;
}

export interface GetResponsabilidadMiembro {
  idMiembroEquipo: string;
  nombreCompleto: string;
  apodo: string;
  esAyudante: boolean;
  RegistroPuntaje: GetResponsabilidadRegistroPuntaje[];
}