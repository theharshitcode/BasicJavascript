function SquareNum(num){
    for(let i = 1 ; i <= num/2 ; i++){
       if( (i*i) === num){
        return i;
       }
    }
    return null;
}



const input = prompt("Enter a number: ");
const num = parseInt(input);

const root =  SquareNum(num);
if(root !== null){
    console.log(`Square of ${root} is equal to the ${num}`)

}
else{
    console.log("Not Found...")
}


