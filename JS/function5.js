

function parent() {

    console.log("child outer");

    function child() {
    console.log("child outer");
        
    }
    child();
    console.log("parent outer");
    
}
parent();