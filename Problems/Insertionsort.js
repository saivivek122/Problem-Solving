let arr=[2 ,4 ,6 ,8 ,3];
for(let i=1;i<arr.length;i++){
    let j=i;
    while(j>0 && arr[j-1]>arr[j]){
        [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
        j=j-1;
    }
}
console.log(arr)