let str="hello"; //holle

let split=str.split(""); //[ 'h', 'e', 'l', 'l', 'o' ]
let left=0;
let right=str.length-1;
function isVowel(ch){
    return "aeiou".includes(ch.toLowerCase())
    
}

while(left<=right){
    if(!isVowel(split[left])){
        left++;
    }
    else if(!isVowel(split[right])){
        right--;
    }
    else{
        let temp=split[left];
        split[left]=split[right];
        split[right]=temp;
        left++;
        right--;
    }          
}
console.log(split.join(""))