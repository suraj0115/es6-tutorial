var sum=20;
for(var i=0; i<10;i++){
    sum+=i;

}
console.log(sum);
console.log(i);

// constant key word
const total="sum variable";
console.log(total);

// constant with arrays
const array=[20,30,40];
array.push(10);
array[1]=50;
array.pop();
console.log(array);

// conts with object

const obj={
    0:"zero",
    1:"one",
    2:"two",
    4:"three"

};
Object.freeze(obj);
console.log(obj[1]);