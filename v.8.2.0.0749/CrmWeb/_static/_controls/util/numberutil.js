
function isNotANumber(stringNumber, decimalSeparator) {
    var normalized = normalizeNumber(stringNumber, decimalSeparator).toLowerCase();
    return isNaN(normalized) || normalized.indexOf("e") != -1 || normalized.indexOf("x") != -1
}

function makeFloatValue(stringNumber, decimalSeparator) {
    return parseFloat(normalizeNumber(stringNumber, decimalSeparator))
}

function normalizeNumber(stringNumber, decimalSeparator) {
    if (decimalSeparator == ".")
        decimalSeparator = "\\.";
    return stringNumber.replace(new RegExp(decimalSeparator, "g"), ".")
}