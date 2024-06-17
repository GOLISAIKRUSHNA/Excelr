
class Person{
    constructor(names,ages){
        console.log(" person nacho");
        this.names=names;
        this.ages=ages;
    }




    displayperson(){
        console.log("Normal function in person");
        console.log(this.names+this.ages);

    }
    person(){
        console.log('person function');
    }
}
class Student extends Person{

    constructor(firstname,lastname){
        super(firstname,lastname)
        console.log(" student nacho");
        this.firstname=firstname;
        this.lastname=lastname;
    }

    displaystudent(){
        console.log("Normal function in student");
        console.log(this.lastname+""+this.firstname);

    }

    student(){
        console.log("student function");
    }
  
}

const s1= new Student("sai","goli");
// const s2=new Student("amma","nana");

s1.displaystudent()
s1.displayperson()
s1.person()
s1.student()





// class Person {
//     constructor(names, ages) {
//         console.log("nacho");
//         this.names = names;
//         this.ages = ages;
//     }

//     display() {
//         console.log("Normal function in person");
//         console.log(this.names + this.ages);
//     }

//     person() {
//         console.log('person function');
//     }
// }

// class Student extends Person {
//     constructor(firstname, lastname) {
//         super(firstname, lastname); // Pass firstname and lastname to the super constructor
//         console.log("nacho");
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     display() {
//         console.log("Normal function in student");
//         console.log(this.lastname + " " + this.firstname);
//         super.display(); // Call the display method from the Person class
//     }

//     student() {
//         console.log("student function");
//     }
// }

// const s1 = new Student("sai", "goli");
// s1.display();
// s1.student();
// s1.person(); // This will call the person method from the Person class
