export function toCelsius(farenheit) {
    console.log(farenheit);
    return ((farenheit - 32) * 5) / 9;
}

export function toFarenheit(celsius) {
    console.log(celsius);
    return (celsius * 9) / 5 + 32;
}

export function Convert(temparature, convertTo) {
    const input = parseFloat(temparature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convertTo(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}
