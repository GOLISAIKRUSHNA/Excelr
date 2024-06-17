



let c=0;

function time(){
    c++;
    console.log("Time: "+c);
    if(c===5){
        clearInterval(see);//stop
    }
}
let see=setInterval(time,1000)