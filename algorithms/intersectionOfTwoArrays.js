let nums1 = [1,2,2,1] 
let nums2 = [2,2]
var intersection = function(nums1, nums2) {
    let common =  nums1.filter(num => nums2.indexOf(num) != -1)
    return [... new Set(common)]
};

intersection(nums1, nums2)

//ruby
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// def intersection(nums1, nums2)
//     nums1 & nums2
// end
//
// => [2, 2]
