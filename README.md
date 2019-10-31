# CONVALIDA DEI DATI DELLA CARTA DI CREDITO v 1.0.0

Questa libreria è destinata alla convalida della carta di credito. Nella versione corrente è in grado di mostrare se un numero di carta è valido o meno, di ritorno true ou false.

## Come installarlo

$  npm install card-validator-dj

## Come usare

> const validator = require("card-validator-dj");
> console.log(cardValidator('5232841955055344'))
> // returns "true"

##  Roadmap responsabile del progetto

#### versione 1.0.0 (released)

-   Caratteristiche: Convalida del numero di carta di credito.
-   Questa versione non accetta lettere, caratteri speciali, numeri più lunghi di 16 cifre o meno di 16 cifre, tutte uguali.


#### versione 2.0.0 (no release date)

- Implementazione dell'opzione che accetta caratteri speciali (-), (.), (,);
- README translated to english.
