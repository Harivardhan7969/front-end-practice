// Global scope
let courseName = "JavaScript";

function practiceScope() {
    // Function scope
    let topic = "Variables";
    console.log(courseName + " - " + topic); // Accessing global and function scope

    if (true) {
        // Block scope
        let detail = "Exploring scopes";
        console.log(detail); // Accessing block scope variable
    }

    // Uncommenting the line below will throw an error because 'detail' is not accessible outside the block
    //console.log(detail);
}

// Global scope
var globalVar = "Global var";
let globalLet = "Global let";
const globalConst = "Global const";

function scopeExample() {
    console.log(globalVar);   // Accessible
    console.log(globalLet);   // Accessible
    console.log(globalConst); // Accessible

    // Function scope
    var funcVar = "Function var";
    let funcLet = "Function let";
    const funcConst = "Function const";
    console.log("inside function");
    console.log(funcVar);   // Accessible
    console.log(funcLet);   // Accessible
    console.log(funcConst); // Accessible

    if (true) {
        // Block scope
        var blockVar = "Block var"; // `var` is function-scoped
        let blockLet = "Block let";
        const blockConst = "Block const";
        console.log("inside block");

        console.log(blockVar);   // Accessible
        console.log(blockLet);   // Accessible
        console.log(blockConst); // Accessible
    }

    console.log(blockVar); // Accessible because `var` is function-scoped
    // console.log(blockLet);   // Error: blockLet is not defined
    // console.log(blockConst); // Error: blockConst is not defined
    console.log(funcConst);

}
practiceScope();
scopeExample();


