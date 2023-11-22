for (let i=1; i<= 100; i++) {
    // I NUMERI MULTIPLI DI 3 E 5 DOVRANNO AVERE COME STAMPA "FIZZBUZZ"
    if(i % 3 == 0 && i % 5 == 0) {
        // STAMPA IN CONSOLE 'FIZZBUZZ'
        console.log('FizzBuzz');
    }
    // I NUMERI MULTIPLI DI 3 DOVRANNO AVERE COME STAMPA "FIZZ"
    else if (i % 3 == 0) {
        // STAMPA IN CONSOLE 'FIZZ'
        console.log('Fizz');
    }
    // I NUMERI MULTIPLI DI 5 DOVRANNO AVERE COME STAMPA "BUZZ"
    else if (i % 5 == 0) {
        // STAMPA IN CONSOLE 'BUZZ'
        console.log('Buzz');
    }
    // SE IL NUMERO NON E' MULTIPLO DI NIENTE STAMPA "i"
    else {
        console.log(i);
    }
}