
const student={
    first:"saikrushna",
    last:"Goli",
    dob:"29/1/2002",
    Goal:true,
    Aim:"true",
    a:12,
    b:23,
    func:function(){return this.first+" "+this.last},
    val:function(){return this.a+this.b}


}
console.log(student);
const b=student.func()
console.log(b);

const c=student.val()
console.log(c);


