

var maxProfit = function(prices) {
    let maxProfit = 0;
    let min  = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }
    return maxProfit;
};



/ // SLOW
// var maxProfit = function(prices) {
//    let profit
//    let maxProfit = 0

//    prices.forEach(function(buy, index) {
//        let rest = prices.slice(index + 1)
//        if (rest){
//          let sell = Math.max(...rest)
//            sell > buy ? profit = sell - buy : null
//             profit > maxProfit ? maxProfit = profit : null
//      }
//    })
//     return maxProfit
// };


// var maxProfit = function(prices) {
//     let profit = 0
//     let maxProfit = 0
//     prices.map(buy => {
//         sell = Math.max(...prices.slice(prices.indexOf(buy)))
//         console.log(sell)

//         if(buy < sell){
//             profit = sell - buy
//             console.log("profit: ", profit)
//             profit > maxProfit? maxProfit = profit : null
//         }


//     })
//             return maxProfit

// };
