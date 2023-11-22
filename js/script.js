const fizz_buzz = document.querySelector('ul');

for (let i=1; i<= 100; i++) {
    // I NUMERI MULTIPLI DI 3 E 5 DOVRANNO AVERE COME STAMPA "FIZZBUZZ"
    if(i % 3 == 0 && i % 5 == 0) {
        
        // CREAZIONE LISTA CON LA STAMPA "FIZZBUZZ"
        let li = `<li id="item-${i}"> FizzBuzz </li>`;
        fizz_buzz.innerHTML += li;
        // STAMPA IN CONSOLE 'FIZZBUZZ'
        console.log('FizzBuzz');
    }
    // I NUMERI MULTIPLI DI 3 DOVRANNO AVERE COME STAMPA "FIZZ"
    else if (i % 3 == 0) {

        // CREAZIONE LISTA CON LA STAMPA "FIZZ"
        let li = `<li id="item-${i}"> Fizz </li>`;
        fizz_buzz.innerHTML += li;
        // STAMPA IN CONSOLE 'FIZZ'
        console.log('Fizz');
    }
    // I NUMERI MULTIPLI DI 5 DOVRANNO AVERE COME STAMPA "BUZZ"
    else if (i % 5 == 0) {

        // CREAZIONE LISTA CON LA STAMPA "BUZZ"
        let li = `<li id="item-${i}"> Buzz </li>`;
        fizz_buzz.innerHTML += li;
        // STAMPA IN CONSOLE 'BUZZ'
        console.log('Buzz');
    }
    // SE IL NUMERO NON E' MULTIPLO DI NIENTE STAMPA "i"
    else {

        // CREAZIONE LISTA CON LA STAMPA DEL NUMERO NON DIVISIBILE
        let li = `<li id="item-${i}"> ${i} </li>`;
        fizz_buzz.innerHTML += li;
        // STAMPA IN CONSOLE 'i'
        console.log(i);
    }
    
}