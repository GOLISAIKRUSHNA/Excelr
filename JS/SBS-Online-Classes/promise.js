
let mypromise=new Promise((resolve,reject)=> {

    let x=1;

    if(x==1){
        resolve("right person")
    }
    else{
        reject("lie person")
    }

    
})

mypromise.then((right)=>{
    console.log(right);
}).catch((wrong)=>{
    console.log(wrong);
})








// fetch("https://dslafondsgdsbgdsfadfadxz").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
// console.log(err);
// })