const a = prompt("Enter a number:");

if( a === `+${a}` || a=== `${a}`){
console.log(`${a} number is positive.`);
}

else if( a === '-' || a === `-${a}` ){
    console.log(`${a} number is negative.`);
}

else if( a === '0' ){
    console.log(`${a} is Zero.`);
}