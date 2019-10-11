
let doll5 = ["diamond"]
let doll4 = ["note", doll5]
let doll3 = ["note", doll4]
let doll2 = ["note", doll3]
let doll1 = ["note", doll2]

let nestingDolls = [doll1]


const findDiamond = function(nestingDolls){

  let result

  //base case
  if(nestingDolls.length === 0){
    return result = "not found!"
  } else if(nestingDolls[0] === "diamond"){
    return result = "found!"
  }

  //recursion
  for(let i = 0; i < nestingDolls.length; i++){
    let current = nestingDolls[i]
    console.log("current is ", current)
    if (Array.isArray(current)){
      return result = findDiamond(current)
    }
  }

}

findDiamond(nestingDolls)
