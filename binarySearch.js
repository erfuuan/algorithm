function binarySearch(arr, target) {
    let left=0,right=arr.length-1
    console.log(right)

    while(left<=right){
        console.log(left,right)
        const mid=Math.floor((left+right)/2)
        console.log(mid)
        if(arr[mid]==target){return arr[mid]}
        if(arr[mid]<target){
            console.log("yes")
            left=mid+1
        }else{
            right=mid-1
        }
    }
}

let a=binarySearch([1,2,3,4,5,6,7],5)

console.log(a)