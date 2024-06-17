

// function demo(){  //normal

// }

// demo()

// const demo=()=>{  //arrow function

// }

// demo()



const demo=()=>{
    const x=2;

    return new Promise((resolve,reject)=>{

        if(x==1){
            resolve("done with company work")
        }
        else{
            reject("not done")
        }
    })

}

demo().then((right)=>{
    console.log(right);
}).catch((wrong)=>{
    console.log(wrong);
});
