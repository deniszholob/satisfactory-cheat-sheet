/** https://en.wikipedia.org/wiki/Metric_prefix */
export enum NumberFormat {
  k = 'k',
  M = 'M',
  G = 'G',
  T = 'T',
  P = 'P',
  E = 'E',
  Z = 'Z',
  Y = 'Y',
  R = 'R',
  Q = 'Q',
}

export const NUMBER_FORMAT_OPTIONS: NumberFormat[] =
  Object.values(NumberFormat);
export function isNumberFormat(value: string): value is NumberFormat {
  return NUMBER_FORMAT_OPTIONS.includes(value as NumberFormat);
}

/** https://usma.org/si-prefixes-and-their-etymologies */
export const NUMBER_FORMAT_DISPLAY: Record<NumberFormat, string> = {
  k: 'Kilo', // Thousand
  M: 'Mega', // Billion
  G: 'Giga', // Trillion
  T: 'Tera', // Quadrillion
  P: 'Peta', // Quintillion
  E: 'Exa', // Sextillion
  Z: 'Zetta', // Septillion
  Y: 'Yotta', // Octillion
  R: 'Ronna', // Nonillion
  Q: 'Quetta', // Decillion
};

// export interface NumberFormatInfo {
//   id: NumberFormat;
//   display: string;
// }

// export const NUMBER_FORMAT_INFO: Record<NumberFormat, NumberFormatInfo> = {
//   [NumberFormat.OptionId1]: {
//     id: NumberFormat.OptionId1,
//     display: 'Option Id 1',
//   },
// } as const;

// export const NUMBER_FORMAT_INFO_OPTIONS: NumberFormatInfo[] =
//   NUMBER_FORMAT_OPTIONS.map(
//     (o: NumberFormat): NumberFormatInfo => NUMBER_FORMAT_INFO[o],
//   );
