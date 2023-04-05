class EmptyArrayError extends Error{ // creo una clase che estende Error
    constructor(message){ //costruttore che contiene il messaggio di suo papà
        super(message);
    }
}