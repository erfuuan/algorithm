// function bubbleSortBasic(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
//   console.log(bubbleSortBasic([5, 3, 8, 4, 2]));



// function bubbleSortOptimized(arr) {
//     let swapped;  
//     for(let i=0;i<arr.length;i++){
//         swapped = false;
//         for(let j=0;j<arr.length-1-j;j++){
//             if(arr[j]>arr[j+1]){
//               [  arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//               swapped = true;
//             }
//             if (!swapped) break;
//         }
//     }
//     return arr
//   }
  
//   console.log(bubbleSortOptimized([5, 3, 8, 4, 2]));
