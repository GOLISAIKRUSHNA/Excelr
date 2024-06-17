
let emp= function(name,age){
    this.name=name;
    this.age=age;

    emp.prototype.getname=function(){
        return this.name;
    }

    emp.prototype.getage=function(){
        return this.age;
    }
}

let emp1=new emp("sai",22)
console.log(emp1.getname());
console.log(emp1.getage());
