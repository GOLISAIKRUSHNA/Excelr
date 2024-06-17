

// function hii() {
//     console.log("hi");
// }
// hii()

// let hii=()=>{
//     console.log("hii");
// }
// hii()


function login(username,password){

    return new Promise((resolve,reject)=>{
        console.log("login is fetching...");
        if(username=='goli' && password=='123456'){
            resolve(username)
        }
        else{
            reject("user and password invalid")
        }
    })
}

function displaydata(username){

    return new Promise((resolve,reject)=>{
        console.log("under displaydata function is working");//msg
        resolve("hello "+username)
    })
}





// login("goli","123456").then((data)=>{
//     console.log(data);//goli
//     displaydata(data).then((res)=>{
//         console.log(res);
//     })
// })
// .catch((err)=>{
//     console.log("invalid username and password ");
// })




//second option of promise
async function doThis(){
    
    try{
        const data=await login('goli',"123456") 
        // console.log("nahi ayya");
    console.log(data);
    const res=await displaydata(data)
    console.log(res);
    }
    catch(e){
        console.log(e);
    }
}

doThis()