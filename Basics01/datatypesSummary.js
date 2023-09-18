// Data types are of two types
// Primitive and Non primitive(Reference)

// Primitive
// 7 types : String , number , boolean , null , undefined , symbol , BigInt

// Reference type or non primitive

// Array,  objects , functions

// JavaScript is a dynamically typed language.

// Examples

let num = 455;
letfracnum = 455.5;

let strv = "moin";

let bool = false;

const  nul = null;

let xmas ; 


let bignum = 475856898127565;

let score = Symbol(155);
let sc = Symbol(115);

console.log(sc === score);// false

// even if the value is same but still Symbol datatype makes the value of the variable unique everytume.

let aar  = [145 , 155, 557];
console.log(typeof aar);// object

let obj = {
    name:"Suvam",
    age:20,
}
console.log(typeof obj);

let fun = function(){
    console.log("heelloo");
}
console.log(typeof fun);// function or object function

// note typeof of every non primitive datatypes is an object

