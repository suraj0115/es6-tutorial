function create(name){
    console.log(name);
}
create("suraj");

const makes=function(name){
    console.log(name);
}

makes("rahul");

const info= (name) =>{       //  this is arrow function
                                           //type 1
    console.log(name);

}
info("wadwale");

// aarow function type 2

const sum=(a,b) =>console.log(a+b);

sum(10,20);

const sumAll= (...args) => console.log(args);

sumAll(10,20,30,40,50);