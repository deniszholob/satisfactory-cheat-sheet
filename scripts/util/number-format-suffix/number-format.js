import { NUMBER_FORMAT_DISPLAY, NUMBER_FORMAT_OPTIONS } from "./number-format.enum.js";
export function absoluteNumber(value) {
    return Math.abs(value);
}
export function formatNumberWithSuffix(value, unit) {
    let title = "";
    let text = "";
    const numberFormat = numberFormatSuffix(value);
    if (!numberFormat) {
        title = ``;
        text = `${value}`;
        return { text, title };
    }
    const unitFormat = unit ?? {
        id: "",
        display: "Item",
    };
    text = `${numberFormat.displayNumber}${numberFormat.prefix ?? ""}${unitFormat?.id}`;
    // number
    title = `${numberFormat.displayNumber} `;
    // add prefix
    if (numberFormat.prefixDisplay) {
        title += `${numberFormat.prefixDisplay}`;
        // unitFormat.display = unitFormat.display.toLocaleLowerCase().trim();
    }
    else {
        // unitFormat.display = ` ${unitFormat.display}`;
    }
    // add unit
    title += `${unitFormat.display}`;
    // plural
    if (Math.abs(value) > 1 && !unitFormat.display.endsWith("s") && !unitFormat.display.includes("per")) {
        title = getPlural(title);
    }
    return { text, title };
}
function getPlural(word) {
    if (word.endsWith("y")) {
        return word.slice(0, -1) + "ies";
    }
    return word + "s";
}
function numberFormatSuffix(value, decimals = 2) {
    if (value === null || value === undefined)
        return null;
    const absValue = Math.abs(value);
    if (absValue < 1000) {
        const formatted = trimDecimals(absValue, decimals);
        return {
            displayNumber: value < 0 ? `-${formatted}` : formatted,
            prefix: undefined,
        };
    }
    const suffixes = NUMBER_FORMAT_OPTIONS;
    const suffixIndex = Math.floor(Math.log10(absValue) / 3);
    const scaledValue = absValue / Math.pow(1000, suffixIndex);
    const shortValue = trimDecimals(scaledValue, decimals);
    const prefix = suffixes[suffixIndex - 1];
    return {
        displayNumber: value < 0 ? `-${shortValue}` : shortValue,
        prefix,
        prefixDisplay: prefix ? NUMBER_FORMAT_DISPLAY[prefix] : undefined,
    };
}
function trimDecimals(num, maxDecimals) {
    const factor = Math.pow(10, maxDecimals);
    const truncated = Math.floor(num * factor) / factor;
    if (truncated % 1 === 0)
        return truncated.toFixed(0);
    return truncated
        .toFixed(maxDecimals)
        .replace(/(\.\d*?[1-9])0+$/, "$1")
        .replace(/\.0+$/, "");
}
