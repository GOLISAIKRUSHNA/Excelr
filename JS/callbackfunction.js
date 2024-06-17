



function first(name,callback) {

    return function(){
        console.log("My name is"+name);
        callback();//return and call back
    }
    
}


function per2(){//call back will call to this func
    console.log("call back function");
}

let per=first("goli",per2);
per();

console.log(per());