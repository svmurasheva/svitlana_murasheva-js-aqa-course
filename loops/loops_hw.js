//task 1
function printNumsFrom1To10() {
    for (n = 1; n <= 10; n++) {
        console.log(n);
    }
}

//task 2 
function sumNumbersFrom1To100() {
    let counter = 0;
    for (let n = 1; n <= 100; n++) {
        counter += n;
    }
    console.log(counter);
}


//task 3
function countBackwards() {
    let n = 10;
    while (n > 0) {
        console.log(n);
        n--;
    }
}

//task 4
function printEvenNums() {
    for (let n = 2; n <= 50; n = n + 2) {
        console.log(n);
    }
}

//task 5
function printMultTable() {
    for (let n = 1; n <= 10; n++) {
        let line = "";
        for (let j = 1; j <= 10; j++) {
            line += (n * j).toString().padEnd(3);
        }
        console.log(line);
    }
}

//task 6
function factorial() {
    let factorial = 1;
    for (let n = 2; n <= 7; n++) {
        factorial *= n;
    }
    console.log(factorial);
}

//task 7
function fibonachiNums() {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    for (let i = 3; i <= 10; i++) {
        let tmp = b;
        b = a + b;
        a = tmp;
        console.log(b);
    }
}

//task 8
function primeNumbs() {
    prime_loop:
    for (n = 2; n <=100; n++) {
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                continue prime_loop;    
            }
        }
        console.log(n);
    }
}

// task 8 without continue and labels
// //task 8
// for (n = 2; n <=100; n++) {
//     if (isPrime(n)) {
//         console.log(n);
//     }
// }

// function isPrime(number) {
//     for(i = 2; i < number; i++) {
//         if (number % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

//task 9
function arrayInit5modDiv() {
    let array = [];
    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }
    
    for (let item of array) {
       if(item % 5 == 0) {
            console.log(item);
       } 
    } 
}

//task 10
function arraySumNums() {
    let arraysum = 0;
    let array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for(let item of array10) {
        arraysum += item;
    }
    console.log(arraysum);
}

//printNumsFrom1To10();
//sumNumbersFrom1To100();
//countBackwards();
//printEvenNums();
//printMultTable();
//factorial();
//fibonachiNums();
//primeNumbs();
//arrayInit5modDiv();
arraySumNums()

