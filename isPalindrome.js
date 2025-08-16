function isPalindrome(str){
    let clean=str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left=0,right=clean.length-1
    while(left<right){
        if(str[left]!==str[right]){return false}

        left++
        right--
    }
    return true
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("erfan"))
