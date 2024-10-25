import { MappedSubCategoriaValues } from './mapped-sub-categoria-values.interface';

export interface MappedMiembroSubCategoria {
  [idMiembroEquipo: string]: MappedSubCategoriaValues;
}
