function calcSum(num) {
    let sum = 0;
    let flag = true;

    if (typeof num == 'number' && isFinite(num)) {
        sum += num;
    }
    else flag = false;
    
    function calc(arg) {
        if (typeof arg == 'number' && isFinite(arg) && flag == true) {
            sum += arg;
        }
        else flag = false;
        return calc;
    }

    calc[Symbol.toPrimitive] = function() {
        return sum;
    }

    return calc;
}