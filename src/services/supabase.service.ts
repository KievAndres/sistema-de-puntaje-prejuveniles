import { Injectable } from '@angular/core';
import { ListaMiembros } from 'src/types/custom-types';
import { supabase } from 'src/utils/supabase';

@Injectable({ providedIn: 'root' })
export class SupabaseService {

  constructor() {}
  
  async getListaMiembros(): Promise<ListaMiembros[]> {
    let { data } = await supabase
      .from('MiembroEquipo')
      .select(`
        nombreCompleto,
        esAyudante,
        RegistroPuntaje(
          PuntajeRegla(
            descripcion,
            puntajeAsignado
          )
        )
      `)
    let listaMiembros = data?.map<ListaMiembros>(miembro => {
      let puntajeTotal = 0;
      if (miembro.RegistroPuntaje) {
        const registroPuntaje = Array.isArray(miembro.RegistroPuntaje) ? miembro.RegistroPuntaje : [miembro.RegistroPuntaje];
        registroPuntaje?.map((registro: any) => {
          if (registro.PuntajeRegla) {
            const puntajeRegla = Array.isArray(registro.PuntajeRegla) ? registro.PuntajeRegla : [registro.PuntajeRegla];
            puntajeRegla?.map((puntaje: any) => {
              puntajeTotal += puntaje.puntajeAsignado;
            })
          }
        })
      }
      return {
        nombreCompleto: miembro.nombreCompleto,
        esAyudante: miembro.esAyudante,
        puntajeTotal
      }
    });
    listaMiembros = listaMiembros?.sort((miembroA, miembroB) => {
      if (miembroA.nombreCompleto < miembroB.nombreCompleto) return -1;
      if (miembroA.nombreCompleto > miembroB.nombreCompleto) return 1;
      return 0
    });
    listaMiembros = listaMiembros?.sort((miembroA, miembroB) => miembroB.puntajeTotal - miembroA.puntajeTotal);
    return listaMiembros || [];
  }
}