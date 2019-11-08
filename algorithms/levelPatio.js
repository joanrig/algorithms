let patio = [ 8 ,4 ,3 ,9, 2 ,1 ,5, 6 ,8, 0 ,7 ,4 ,3 ,9 ,7]


var levelPatio = function(patio){

  let current = 0
  let max = 0

  yard.forEach(plot => {
    current += plot
    if(plot > max){
      max = plot
    }
  })

  let desired = highPoint * yard.length
  return desired - total

}

levelPatio(patio)


var levelPatio = function(patio){

  let needed = 0
  let max = Math.max(...patio)

  patio.forEach(plot => {
    needed += max-plot
  })

  return needed
}

    8    4    3    9    2

    1    5    6    8    0

    7    4    3    9    7

    needed = desired - current

  desired = max * patio.length

  let current = 0
  yard.forEach(plot => {
    current += plot
    }
  })
