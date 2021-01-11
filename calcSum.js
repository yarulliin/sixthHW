function calcSum(num) {
    let sum = 0;
    let flag = true;

    if (typeof num == 'number' && num != NaN && num != Infinity) {
        sum += num;
    }
    else flag = false;
    
    function calc(arg) {
        if (typeof arg == 'number' && arg != NaN && arg != Infinity && flag == true) {
            sum += arg;
        }
        else if (typeof arg != 'number' || arg == NaN || arg == Infinity) {
            flag = false;
        }
        return calc;
    }

    calc[Symbol.toPrimitive] = function(hint) {
        if (hint == 'string') {
            return sum;
        }
    }

    return calc;
}