export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Juego: {
        Row: {
          cantidadEquipos: number
          descripcion: string
          esIndividual: boolean
          fechaModificacion: string
          idJuego: string
          nombre: string
          puntajePrimerLugar: number
          puntajeSegundoLugar: number
          puntajeTercerLugar: number
        }
        Insert: {
          cantidadEquipos?: number
          descripcion?: string
          esIndividual?: boolean
          fechaModificacion?: string
          idJuego?: string
          nombre?: string
          puntajePrimerLugar?: number
          puntajeSegundoLugar?: number
          puntajeTercerLugar?: number
        }
        Update: {
          cantidadEquipos?: number
          descripcion?: string
          esIndividual?: boolean
          fechaModificacion?: string
          idJuego?: string
          nombre?: string
          puntajePrimerLugar?: number
          puntajeSegundoLugar?: number
          puntajeTercerLugar?: number
        }
      }
      MiembroEquipo: {
        Row: {
          esAyudante: boolean
          fechaModificacion: string | null
          fechaNacimiento: string
          idMiembroEquipo: string
          nombreCompleto: string
        }
        Insert: {
          esAyudante?: boolean
          fechaModificacion?: string | null
          fechaNacimiento: string
          idMiembroEquipo?: string
          nombreCompleto?: string
        }
        Update: {
          esAyudante?: boolean
          fechaModificacion?: string | null
          fechaNacimiento?: string
          idMiembroEquipo?: string
          nombreCompleto?: string
        }
      }
      PuntajeRegla: {
        Row: {
          descripcion: string
          fechaModificacion: string
          idPuntajeRegla: string
          puntajeAsignado: number
        }
        Insert: {
          descripcion?: string
          fechaModificacion?: string
          idPuntajeRegla?: string
          puntajeAsignado?: number
        }
        Update: {
          descripcion?: string
          fechaModificacion?: string
          idPuntajeRegla?: string
          puntajeAsignado?: number
        }
      }
      RegistroPuntaje: {
        Row: {
          fechaModificacion: string
          idJuego: string | null
          idMiembroEquipo: string
          idPuntajeRegla: string | null
          idRegistroPuntaje: string
        }
        Insert: {
          fechaModificacion?: string
          idJuego?: string | null
          idMiembroEquipo: string
          idPuntajeRegla?: string | null
          idRegistroPuntaje?: string
        }
        Update: {
          fechaModificacion?: string
          idJuego?: string | null
          idMiembroEquipo?: string
          idPuntajeRegla?: string | null
          idRegistroPuntaje?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
