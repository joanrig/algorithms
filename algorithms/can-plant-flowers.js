var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0){
        return true
    }
    flowerbed.unshift(0)
    flowerbed.push(0)

    let counter = 0

    for(let i = 0; i < flowerbed.length - 2; i++){
        let current = flowerbed[i]
        let next = flowerbed[i+1]
        let nextNext = flowerbed[i + 2]

        if(current === 0 && next === 0 && nextNext === 0){
            counter ++
            if(counter === n){
                return true
            }
            i ++
        }
  }
    return false

};
