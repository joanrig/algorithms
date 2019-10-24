var findPairs = function(nums, k) {
    if (k < 0) {return 0}
    obj = {}
    nums.forEach(n => {
        obj[n] ? obj[n] += 1 : obj[n] = 1
    })

    const numsUnique = new Set(nums)
    console.log(numsUnique)
    let counter = 0
    numsUnique.forEach(n => {
        key = n + k
        if (k === 0 && obj[key] > 1) {
            counter += 1
        } else if (k !== 0 && obj[key] > 0) {
            counter += 1
        }
    })
    return ans
}
