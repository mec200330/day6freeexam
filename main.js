//Iteration 1
let hacker1 = prompt ("The Driver's name")
console.log("The driver's name is ", hacker1);
let hacker2 = prompt("The navigator's name es")
console.log("The navigator's  name is", hacker2);

//Iteration2
if(hacker1.length>hacker2.length){
    console.log('The driver has the longest name, it has', hacker1.length, 'characters');
}else{
    console.log('The navigator has the longest name, it has', hacker2.length, 'characters');
}
//Iteration3

for(let i=0; i<hacker1.length; i++){

   
 console.log(hacker1.charAt(i))
   
}

for(let i=hacker2.length; i>=0; i--){
    console.log(hacker2.charAt(i));
}


if(hacker1.localeCompare(hacker2) <= -1){
console.log("The driver's name goes firts");

}else if(hacker1.localeCompare(hacker2) >=1){
    console.log("Yo, the navigator goes firts definitely");
}else{
    console.log('What?! you both have the same name');
}
