
var isHappy = function(n, counter = 0) {
    result = false
    if(counter < 8){
        let array = n.toString().split('').map(n => n*n)
        let sum = array.reduce((a,b) => a + b, 0)

        if(sum === 1){
           return result = true
        } else {
            counter++
            isHappy(sum, counter)
        }
    }

    return result
}
