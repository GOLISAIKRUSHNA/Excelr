
//hof for operation
function per1(num1,num2,operation) {

    return operation(num1,num2);
}

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}


const result=operate(12,3,add);
const result1=operate(10,4,sub);

console.log("addition",result);

console.log("subtraction",result1);




