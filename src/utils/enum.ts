/**
 * Meses según el objeto Date
 * 0: Enero
 * 1: Febrero
 * 2: Marzo
 * 3: Abril
 * 4: Mayo
 * 5: Junio
 * 6: Julio
 * 7: Agosto
 * 8: Septiembre
 * 9: Octubre
 * 10: Noviembre
 * 11: Diciembre
 */
export const enumNombreMeses: string[] = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

export const periodoRanking: number[][] = [
  [1,2],
  [3,4],
  [5,6,7],
  [8,9],
  [10,11]
]

export const puntajeReglaId = {
  asistencia: '8b37f961-a447-47ad-b78b-3729fbc16fc8',
  puntualidad: '5234bc9b-9075-4479-943a-f0690ddc6e07'
}

const enumRoutesTitle = {
  ranking: 'Ranking',
  reglas: 'Registro reglas'
}

export function getPathDescriptionValue(route: string): string {
  return enumRoutesTitle[route as keyof typeof enumRoutesTitle];
}

export function getColorFromPalette(index: number): string {
  const palette = [
    '#0fa798',
    '#f2c02b',
    '#f29d36',
    '#f3764a',
    '#ef5354'
  ];
  return palette[index];
}