
var isstop=true;

var s=0;
var min=0;
var hr=0;

function start(){
    if(isstop==true){ //statmt


        isstop=false;
        timer();

    }  
}


function timer(){
    

    if(isstop==false){

        s=parseInt(s,10);
        min=parseInt(min,10);
        hr=parseInt(hr,10);



        s++;//1
       

        if(s<10){

            s="0"+s;

        }
        if(min<10){

            min="0"+min;

        }
        if(hr<10){

            hr="0"+hr;

        }


        if(s==60){
            min++;
            s=0;
        }

        if(min==60){
            hr++;
            min=0;
        }

        if(hr==24){
            hr=0;
        }

        console.log(s)
        stopwatch.innerHTML= hr+":"+min+":"+s;

        setTimeout("timer()",1000)// infinite

    }


}

function stop(){
    console.log(isstop)
    isstop=true;
    
   

}

function reset(){

    stopwatch.innerHTML="00:00:00";
    isstop=true;


}