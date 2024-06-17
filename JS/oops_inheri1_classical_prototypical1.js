
class Car{

    getname(name){
        this.name=name
        console.log("name of your car is: "+name);
    }
    carstarted(){
        console.log("car engine is started");
    }

    carstopped(){
        console.log("car engine is stopped");
    }
}

class BMW extends Car{
        topspeed(speed)
        {
        console.log("Top speed for "+this.name +" is" +speed);
        }
}

let mycar=new BMW()
mycar.getname("scorpio");
mycar.carstarted()
mycar.carstopped()

mycar.topspeed(400)
