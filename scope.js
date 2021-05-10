let j=5; // universal varialble
let i=12;
//scope 1
{
let i=15;
console.log(j);
}

//scope 2

{
 console.log(i);
 console.log(j);
}