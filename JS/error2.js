

try{
    console.log("try is started");
    throw new Error("aya")
}
catch(e){
// console.log("chal",e.message);
console.log(e.message);
}
finally{
    console.log("last statement");
}