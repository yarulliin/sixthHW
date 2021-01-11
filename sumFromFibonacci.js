function calcSumFromFibonacci(from, to) {
    let sum = 0;
    let fibonacci = [0, 1];

    if (typeof from != 'number' || typeof to != 'number') {
        throw 'Error!';
    }
    if (from == NaN || to == NaN || from == Infinity || to == Infinity) {
        throw 'Error!';
    }
    if (from < 0 || to < from) {
        throw 'Error!';
    }

    while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= to) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }

    for (el of fibonacci) {
        if (el >= from && el <= to) {
            sum += el;
        }
    }

    return sum;
}