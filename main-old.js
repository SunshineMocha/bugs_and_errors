let myName;

// function setName(newName){
//     "use strict"; //senza questo, myNam (un typo) mi diventa automaticamente undefined
//     myNam = newName;
// }

// setName("Chiara"); //senza questo, myNam (un typo) mi diventa automaticamente undefined passata come nuova variabile globale, siccome non trova myName
// console.log("myName: "+ myName);
// console.log("myNam: "+ myNam);


// annotazioni di tipo


// sarebbe meglio scrivere che val: bool per non causare casini nel codice
// bool -> bool (entra tipo -> esce tipo)

// function invert(val){
//     return !val
// }
// console.log("Invert(true): " + invert(true));
// console.log("Invert (5): "+ invert(5)); 



// testing

class ArgumentIsNotArrayError extends Error{
    constructor(msg){
        super();
        this.msg = msg;
    }
}

class ArrayIsEmpty extends Error{
    constructor(msg){
        super();
        this.msg = msg;
    }
}

// Array[T] -> T
function pickFirstElementOfArray(array){
    if (!Array.isArray(array)) {
        throw new ArgumentIsNotArrayError("Non è un array");
    }
    if (array.length === 0) {
        throw new ArrayIsEmpty("L'array è vuoto!");
    }
    return array[0];
}

pickFirstElementOfArray(["ciao", "mondo"]);
// -> "ciao"
pickFirstElementOfArray([1,2,3]);
// -> 1
function test(testDescription, body){
    if (body()) {
        console.log(`TEST SUCCEEDED: ${testDescription}`);
    } else{
        console.log(`TEST FAILED: ${testDescription}`);
    }
}

test("picking first element of array of strings", function() {
    return pickFirstElementOfArray(["ciao", "mondo"]) === "ciao";
})
test("picking first element of array of integers", function() {
    return pickFirstElementOfArray([1,2,3]) === "1";
})
test("picking first element of array of integers", function() {
    return pickFirstElementOfArray([7,7,7]) === 7;
})
test("picking first element of array of empty array", function() {
    return pickFirstElementOfArray([]) === null;
})

console.log("TRYING TO CALL pickFirst ON true");
try {
    let val = pickFirstElementOfArray(true);
    console.log("first element of array is " + val)
} catch (error){
    if (error instanceof ArrayIsEmpty) {
        console.log("Attenzione, passare un array non vuoto");
        //return 0;
    }
    throw error;
} finally {

}