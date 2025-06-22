const age = prompt("Enter your age:");

if( age >= 18 && age < 60 ){
    console.log("You are eligible to vote.");
}
else if( age < 18 ){
    console.log("You are not eligible to vote yet.");
}