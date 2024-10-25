import { CategoriaSubCategoria } from './categoria-sub-categoria.interface';

export interface MiembroCategoria {
  [idMiembroEquipo: string]: CategoriaSubCategoria;
}
