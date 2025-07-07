let arr=[1, 2, 4, 7, 11, 15];
let target=15;
let left=0;
let right=arr.length-1;    
let sum=0;
while(left <=right){
    sum=arr[left]+arr[right];
     if(sum==target){
        console.log(left,right)
        break;
    }
    else if(sum<target){
        left=left+1;
    }
    else {
        right=right-1;
    }
  
   
}   