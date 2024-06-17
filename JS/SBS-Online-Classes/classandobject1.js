

class Student{

    constructor(firstname,lastname){
        console.log("nacho");
        this.firstname=firstname;
        this.lastname=lastname;
    }

    display(){
        console.log("Normal function in student");
        console.log(this.lastname+this.firstname);

    }
  
}

const s1= new Student("sai",'Goli');
// const s2=new Student("amma","nana");

s1.display()
