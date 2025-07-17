// decimal to binary
function decimal_binary(n) {
    if (n === 0) return 0;

    // in case of negative number
    if (n < 0) {
        let normalBinary = decimal_binary(Math.abs(n)).split("");
        if (Math.abs(n) <= 255 && normalBinary.length <= 8) {
            normalBinary.unshift("0".repeat(8 - normalBinary.length))
            normalBinary = normalBinary.join("");
        } else if (Math.abs(n) <= 65535 && normalBinary.length <= 16) {
            normalBinary.unshift("0".repeat(16 - normalBinary.length))
            normalBinary = normalBinary.join("");
        }
        let inverted = normalBinary.split("").map(bit => bit === "0" ? "1" : "0").join("");
        let isOneAdded = false;
        let addOne = inverted.split("").reverse().map(bit => {
            if (isOneAdded === false) {
                if (bit === "1") {
                    return "0"
                } else if (bit === "0") {
                    isOneAdded = true;
                    return "1"
                }
            }
            return bit
        }).reverse().join("");
        return addOne
    }

    // in case of positive numbers
    let remainders = [];
    let integer = n;
    while (integer !== 0) {
        remainders.push(integer % 2)
        integer = Math.floor(integer / 2);
    }
    return remainders.reverse().join("")
}

// binary to decimal
function binary_decimal(n) {
    let sum = n.split("").reverse().map((bit, index) => {
        return Number(bit) * Math.pow(2, index)
    }).reduce((a, b) => a + b, 0);
    return sum
}

// decimal to hexadecimal
function decimal_HexaDecimal(n) {
    if (n === 0) return 0;

    if (n < 0) {
        let negativeDecimal_To_Binary = decimal_binary(n);
        let toHexa = binary_hexdecimal(negativeDecimal_To_Binary);
        return toHexa
    }

    let remainders = [];
    let integer = n;
    while (integer !== 0) {
        remainders.push(integer % 16)
        integer = Math.floor(integer / 16);
    }
    let hexadecimalConversion = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F",
    }
    return remainders.map(remainder => {
        return remainder < 10 ? remainder : hexadecimalConversion[remainder]
    }).reverse().join("");
}

// hexadecimal to decimal
function Hexadecimal_decimal(n) {
    let hexadecimalConversion = {
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15,
    }

    let conversion = n.split("").reverse().map((hexa, index) => {
        return isNaN(hexa) ? hexadecimalConversion[hexa.toUpperCase()] * Math.pow(16, index) : +hexa * Math.pow(16, index)
    }).reduce((a, b) => a + b, 0);

    return conversion
}

// binary to hexdecimal
function binary_hexdecimal(n) {
    let binaryToDecimal = binary_decimal(n);
    let decimalToHexadecimal = decimal_HexaDecimal(binaryToDecimal);
    return decimalToHexadecimal
}

// hexadecimal to binary
function hexadecimal_binary(n) {
    let hexadecimalToDecimal = Hexadecimal_decimal(n);
    let decimalToBinary = decimal_binary(hexadecimalToDecimal);
    return decimalToBinary
}
