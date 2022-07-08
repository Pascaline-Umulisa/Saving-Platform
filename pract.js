function reverseArray(){
    nums = [2,3,4,5,6]
    if (nums.length > 1){
        var left = 0;
        var right = nums.length-1;
        while (left<right) {
            [nums[left],nums[right] = nums[right],nums[left]]
            left++;
            right--;
        }
        console.log(nums);
    }
}
reverseArray()