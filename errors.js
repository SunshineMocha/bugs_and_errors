class EmptyArrayError extends Error{ // creo una clase che estende Error
    constructor(message){ //costruttore che contiene il messaggio di suo papà
        super(message);
    }
}
class ElementNotFoundError extends Error{ // creo una clase che estende Error
    constructor(message){ //costruttore che contiene il messaggio di suo papà
        super(message);
    }
}

class MultiplicatorUnitFailed extends Error{
    constructor(){ // se devo passare un solo messaggio faccio un constructor vuoto con solo il messaggio in super
        super(`Klank!`);
    }
}