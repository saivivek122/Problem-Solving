let arr=['r','a','c','e','c','a','r'];
let isPalindrome=true;   

let left=0;
let right=arr.length-1;
while(left<=right){
    if(arr[left]!=arr[right]){
        isPalindrome=false;
        break;
       
    }
    left=left+1;
    right=right-1;
}
console.log(isPalindrome)