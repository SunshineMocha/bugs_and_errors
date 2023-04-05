// Esercizio 1

function multiplyBy2Maybe(selectedNumber) {
    const rand = Math.random()
    if (rand <= 0.2) { // se numero minore, faccio il programma
        return selectedNumber * 2;
    }
    else {
        throw new MultiplicatorUnitFailed(); // non passo niente perchè fa già tutto la classe, se num maggiore, mi da errore
    }
}


// Test
// try {
//     const result = multiplyBy2Maybe(5); // -> 10
//     console.log(result);
// } catch (error) {
//     console.log(error.message); -> Chiama errore
// }

// Con Funzione ricorsiva invece del for
// function reliableMultiplyBy2(selectedNumber){
//     try {
//         const result = multiplyBy2Maybe(selectedNumber); // chiamo la funzione malfunzionante
//         return result; // ritorno il risultato
//     } catch (error) {
//         if (error instanceof MultiplicatorUnitFailed) {
//             console.log(error.message); // stampo l'errore
//             return reliableMultiplyBy2(selectedNumber); // avvio ricorsione
//         }
//         else{
//             console.log(error.message);
//         }
//     }
// }

function reliableMultiplyWhile(selectedNumber) {
    while (true) {
        try {
            const res2 = multiplyBy2Maybe(selectedNumber); // chiamo la funzione malfunzionante
            return res2; // ritorno il risultato
        } catch (error) {
            if (error instanceof MultiplicatorUnitFailed) {
                console.log(error.message); // stampo l'errore
                continue;
            }
            else {
                break;
            }
        }
    }
}


// console.log(reliableMultiplyBy2(5));
// console.log(reliableMultiplyWhile(5));

// Esercizio 2

const box1 = new Box();
  
function withBoxUnlocked(box, func) {
    /*if (box.locked === false) {
        console.log("THE BOX IS ALREADY UNLOCKED!");
    } else {*/
        box.unlock();
        try {
            func(box);
        } catch (error) {
            throw error;
        }
        finally{
            box.lock();
        }/*
    }*/
}

withBoxUnlocked(box1, (box) => {
    box.content.push("gold piece");
});

// console.log(box1);

// try {
//     withBoxUnlocked(function () {
//         throw new Error("Pirates on the horizon! Abort!");
//     });
// } catch (e) {
//     console.log("Error raised: " + e);
// }

try {
    withBoxUnlocked(box1, (box) => {
        throw new Error("Pirates on the horizon! Abort!");
    })
}
 catch (e) {
    console.log("Error raised: " + e);
}

console.log(box1);