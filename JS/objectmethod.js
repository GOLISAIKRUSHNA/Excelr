


let obj={ 
    key1:"val1",
    key2:"val2",
    key3:"val3",
    key4:"val4"

}

// console.log(obj);


// //add
// obj.key5="val5";
// console.log(obj);

// //delete
// delete(obj.key3);
// console.log(obj);



// //keys
// console.log(Object.keys(obj));

// //values
// console.log(Object.values(obj));

// //obj to arrays
// console.log(Object.entries(obj));

// //existing can modify but cannot add new items
// console.log(Object.seal(obj));
// obj.key6="new";
// obj.key4="new";
// console.log(obj);



//assign no duplicate in object

let new1={
    key1:"hii",
    key2:"goli",
    key3:"hiii",
    key4:"golii"
}
let new2={
    key3:"hii",
    key1:"bye",
    key2:"goli"

}
console.log(Object.assign(new1,new2));
// console.log();


//freez no updated in key and values pairs

console.log(Object.freeze(obj));

obj.key1="chalo";
obj.key8="chalo";


console.log(obj);

