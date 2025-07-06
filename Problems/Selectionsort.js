let arr=[9,6,1,5,2,3,6,8,4];
for(let i=0;i<arr.length;i++){
    let min_index=i;
    for(let j=i;j<arr.length;j++){
        if(arr[j]<arr[min_index]){
            min_index=j
        }
    }
    if(min_index!=i){
        [arr[i],arr[min_index]]=[arr[min_index],arr[i]]
    }
}
console.log(arr)

//Tc =O(n^2)
//sc=O(1)
