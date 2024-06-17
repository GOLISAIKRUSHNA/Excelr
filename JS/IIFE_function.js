// IIFE

// Immediate invoke function expression


//eg1:
// (function abc() {
//     console.log("Immediate invoke function expression");
    
// });


//eg2:
//using arrow func with IIFE

let a=(()=>{
    console.log("Arrow func with IIFe");
    return 12+13;
})();

console.log(a);


//eg 3: IIFE with anonymous
(function(){
    console.log("iife using anonymous function");
})();

