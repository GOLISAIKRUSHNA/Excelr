
let data={name:"goli",age:24};

let copy1=structuredClone(data)//deeply copy
console.log(copy1);

let copy2={...data} //shallow copy
console.log(copy2);

let copy3=Object.assign({},data)//shallow 
console.log(copy3);



let copy4=JSON.parse(JSON.stringify(data))//create deep copy
console.log(copy4);




