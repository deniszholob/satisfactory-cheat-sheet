/** https://en.wikipedia.org/wiki/Metric_prefix */
export var NumberFormat;
(function (NumberFormat) {
    NumberFormat["k"] = "k";
    NumberFormat["M"] = "M";
    NumberFormat["G"] = "G";
    NumberFormat["T"] = "T";
    NumberFormat["P"] = "P";
    NumberFormat["E"] = "E";
    NumberFormat["Z"] = "Z";
    NumberFormat["Y"] = "Y";
    NumberFormat["R"] = "R";
    NumberFormat["Q"] = "Q";
})(NumberFormat || (NumberFormat = {}));
export const NUMBER_FORMAT_OPTIONS = Object.values(NumberFormat);
export function isNumberFormat(value) {
    return NUMBER_FORMAT_OPTIONS.includes(value);
}
/** https://usma.org/si-prefixes-and-their-etymologies */
export const NUMBER_FORMAT_DISPLAY = {
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
