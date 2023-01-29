/* Primitive data types - 7
Null,Number,String,SYmbol,Undefined,Boolean,Bigint 
nnbbssu

*/
let a=null;  //kuch hai he nhi andar
let b=45;
let c="Sarika"
let d=Symbol("Hello")
let e=undefined;
let f=true;
let g=BigInt("568")
console.log(a,b,c,d,e,f,g);

console.log(typeof d)

const item={
    "sarika":true,   // object not dictionary
    "seeta":78
}
console.log(item["seeta"])