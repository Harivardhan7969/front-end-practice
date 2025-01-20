
let gloabalVariable = "this is glbal variable";

function myFunction() {

    let localVariable = "this is local variable";
    console.log("inside function");

    console.log(localVariable);
    console.log(gloabalVariable);

}
//console.log(localVariable);
console.log(gloabalVariable);

function myFunction2() {

    if (true) {
        let blockScopeVariable = "this is let block scope variable 3";
        var blockScopeVariable2 = "this is var block scope variable";
        const blockScopeVariable3 = "  this is const block scope variable";
        console.log("blockScopeVariable");
        console.log(blockScopeVariable);
        console.log(blockScopeVariable2);
        console.log(blockScopeVariable3);


    }
    console.log("inside function");

    console.log(blockScopeVariable);
    console.log(blockScopeVariable2);
    console.log(blockScopeVariable3);

}


myFunction();
myFunction2();