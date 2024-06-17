

function Employee(name,age,salary){

    this.name=name;
    this.age=age;
    this.salary=salary;
    let monthlybonus=20000;


    let finalsal=function(){
        let final=salary+monthlybonus;
        console.log("final Sal"+final);
    }

    this.getEmpdetails=function(){
        console.log("name:"+name+"age:"+age);
        finalsal()
    }
}

let hi=new Employee("sai",22,150000)
hi.getEmpdetails()