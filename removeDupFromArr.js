function removeDuplicates(arr){
return [...new Set(arr)]
}

console.log(removeDuplicates([1,1,2,3,2,2,2,5,3,5,3,2]))