
function outer() {
    let out="outer";
    function inner() {
        console.log(out);x`x`x``
        return inner();
    }
    // return outer
}

let hi=outer();
console.log(hi);