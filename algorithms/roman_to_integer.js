const romanToInt = function(s) {
    const array = s.split('');

    const conversion = {"M": 1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1}
    // const romanNumerals = ["M", "D", "C", "L", "X", "V", "I"];
    // const integers = [1000, 500, 100, 50, 10, 5, 1];

    let total = 0 ;
    let current;
    let currentValue;
    let next;
    let nextValue;


    for (let i=0; i < array.length; i++){
        current = array[i];
        currentValue = conversion[array[i]]
        // currentValue = (integers[romanNumerals.indexOf(current)]);
        next = array[i+1];
        nextValue = conversion[array[i+1]]
        // nextValue = (integers[romanNumerals.indexOf(next)]);


        if (currentValue < nextValue ){
            total -= (currentValue);
        } else {
            total += (currentValue);
        }

    }
    return total

}
