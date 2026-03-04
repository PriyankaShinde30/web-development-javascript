let globalV = "Global";

function outer(){
    let outerV = "Outer";
    
    function inner() {
        let innerV = "Inner";

        console.log(globalV);
        console.log(outerV);
        console.log(innerV);
    }
    inner();
}
outer();
