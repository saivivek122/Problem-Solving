let arr=[9,1,2,4,6,5];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
}
console.log(arr)

//Best tc=O(n)
//worst tc=O(n^2)
//Average tc=O((n/2)*n)=O(n^2)
//sc=O(1)