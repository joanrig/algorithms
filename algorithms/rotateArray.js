var rotate = function(nums, k) {
    let i = 0
    while(i < k){
        nums.unshift(nums.pop())
        i++
    }
    return nums
};



var rotate = function(nums, k) {
    if(nums.length > k){
        nums.unshift( ...nums.splice(-k))
    } else {
       let i = 0
        while(i < k){
        nums.unshift(nums.splice(-1))
        i++
        }
    }
    return nums
};





first solution
var rotate = function(nums, k) {
    let i = 0
    while(i < k){
        nums.unshift(nums.pop())
        i++
    }
    return nums
};


//2nd solution
var rotate = function(nums, k) {
    let i = 0
    while(i < k){
        nums.unshift(nums.splice(-1,))
        i++
    }
    return nums
};
