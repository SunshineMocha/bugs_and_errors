// // function parseIntWithError(selectedString){ // ritorna un errore unico e generico quando non è intero altrimenti stampa intero
// //     const result = parseInt(selectedString);
// //     if (isNaN(result)) { // Controlla se result è un numero o una stringa
// //         throw new Error("Error! That's not a number!"); // lancia un nuovo elemento di classe ERROR con Messaggio errore (stringa)
// //     } else{
// //         return result; // ritorna il risultato
// //     }
// // }

// // // try catch, struttura simile a if else
// // // prova a passare, ma se si rompe non rompere il programma, troviamo una soluzione
// // try{
// //     const number = parseIntWithError('caffè');
// //     // const number = prompt("Insert Number");
// //     // parseIntWithError(number);
// //     console.log(number); // passo la funzione, se non si rompe salto il catch, altrimenti vado in catch
// // } catch (error){  // se c'e errore
// //     // console.log(error.message); // mi manda il messaggio di errore scritto sopra
// //     console.log(`Dear User, maybe its my fault but something went wrong. Coult you try once again inputting your numbers? Thank you, and I'm sorry...`); 
// // }

// // funzioni che possono generare più errori generici
// // quando non trova nulla e quando un array è vuoto
// function indexOfWithError(array, element){
//     if (array.length === 0) {
//         throw new EmptyArrayError("Error! The array is empty!"); // lancia un nuovo elemento di classe ERROR con Messaggio errore (stringa)
//         // cambiato l'errore per rimandare alla classe (figlia) che estende error
//     }
//     else{
//         const index = array.indexOf(element) // cerco l'indice dell'elemento dentro l'array
//         if (index === -1) {
//             throw new ElementNotFoundError("Error! The element doesnt exists!");
//         }
//         else{
//             return index; // ritorna l'index
//         }
//     }
// }

// // console.log(indexOfWithError([], `Davide`)); // returns "empty" error
// // console.log(indexOfWithError([`simone`, `jing`], `Davide`)); // returns "element doesnt exists"
// //console.log(indexOfWithError([`simone`, `jing`], `jing`)); // returns index

// // gestiamo ora gli errori
// // se non si rompe non entra mai nel catch
// // se si rompe mi ritorna errore

// // try {
// //     const index = indexOfWithError([], `paperone`);
// //     console.log(index); // returns index
// // } catch (error) {
// //     console.log(error.message); // returns one of the errors
// // }

// // Se io volessi comportarmi diversamente a seconda dell'errore: 
// // Creo un js per ogni errore, vedere files. 
// // Edit: siccome le classi erano simili e piccoline, le abbiamo raggruppate tutte sotto un file unico (errors.js)

// try {
//     const index = indexOfWithError(1, `paperone`); // provo la funzione
//     console.log(index); // returns index
// } catch (error) {
//     if(error instanceof EmptyArrayError){ // se fa parte di questo tipo di errore a cui ho creato la classe
//         console.log("Dear user, due to an error, the array received was empty.");
//     }
//     else if(error instanceof ElementNotFoundError){ // se fa parte di questo tipo di errore a cui ho creato la classe
//         console.log("Dear user, I went through the seven seas and I still couldnt find your element!");
//     }
//     else{ // se non fa parte di alcun tipo di errore
//         console.log("Uh oh, something broke but we dont exactly know what...");
//     }
// }

// // A volte non è detto che un programma sappia gestire il suo errore

// function isElementInArray(array, element) { // funzione che restituisce vero/falso se trova l'elemento
//     //so gia trovare l'index, quindi uso la funzione fatta sopra, in un try catch perche so che potrebbe aver bisogno di catchare degli errori
//     try {
//         indexOfWithError(array,element);
//         return true; // return true if element exists
//     } catch (error) {
//         if (error instanceof ElementNotFoundError) { // uso l'errore per ottenere il risultato
//             return false; // return false if not found, errore gestito
//         }
//         else{ // se ricevo un errore diverso prendo un errore e lo rilancio in cima, cosa che dovrò gestire (vedi try catch successiva dove uso elemento vuoto senza specifico errore)
//             throw error;
//         }
//     } finally{  // Questo pezzo di codice viene eseguito comunque indipendentemente se entri nel catch o no    
//             console.log('Something went wrong.'); 
//         }
// }

// try{
//     const isInside = isElementInArray(['quo', 'qua'], 'qui'); // mi va nella funzione. Se manca, mi va nel catch e controlla l'errore e mi da false. 
//     // se l'array è vuoto va nel catch e poi me lo rilancia a questo catch dandomi l'errore
//     console.log(isInside); 
// }
// catch(error){
//     console.log(error.message);
// }
