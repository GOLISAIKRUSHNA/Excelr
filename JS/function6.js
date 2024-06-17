
function emp(ename,eid,esal,eaadhar) {

    this.ename=ename;
    this.eid=eid;
    this.esal=esal;
    this.eaadhar=this.eaadhar;
    this.getdetails=function() {   
        return "emp name is "+this.ename +"emp id is"+this.eid+"emp is esal"+this.esal+"emp is eaadhar"
    }
}

let emp1= new emp("sai",32,150000,8989)
console.log(emp1);
let emp2= new emp("goli",32,150000,8989)
console.log(emp2);
let emp3= new emp("Amma",32,150000,8989)
console.log(emp3);
let emp4= new emp("Nana",32,150000,8989)
console.log(emp4);
let emp5= new emp("Anna",32,150000,8989)
console.log(emp5);


console.log(emp1.getdetails());