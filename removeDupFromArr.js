function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,1,1,1,4,5,4,5,6,6,7]))