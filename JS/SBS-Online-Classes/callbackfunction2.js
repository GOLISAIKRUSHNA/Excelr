


function login(aja){
    console.log("login");
    aja() //this is calling disp function
}


function disp(){
    console.log("disp");
}

login(disp)