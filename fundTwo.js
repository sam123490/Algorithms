// Countdown
function countDown(num){
    let arr = [];
    for(let i = num; i >= 0; i--){
        arr.push(i);
    }
    return arr;
}
let myArray = countDown(10);
console.log(myArray);

// Print and Return
function printAndReturn(arr){
    console.log(arr[0]);
    return arr[1];
}
console.log(printAndReturn([10, 15]));

// First Plus Length
function firstPlusLength(arr){
    let sum = arr[0] + arr.length;
    return sum;
}
let mySum = firstPlusLength(["Joe", 6, 10, 2, 12, 20]);
console.log(mySum);

// Values Greater than Second
function getValues(arr){
    const test = arr[1];
    let count = 0;
    for(let i = 0; i <= arr.length; i++){
        let num = arr[i];
        if(num > test){
            console.log(num);
            count++;
        }
    }
    return count;
}
const testArray = [1,3,5,7,9,13];
console.log(getValues(testArray));

// Values Greater than Second, Generalized
function createArray(arr){
    if(arr.length < 2){
        console.log("Your array needs at least two values.");
        return arr;
    }
    let newArray = [];
    const test = arr[1];
    let count = 0;
    for(let i = 0; i <= arr.length; i++){
        let num = arr[i];
        if(num > test){
            newArray.push(num);
            count++;
        }
    }
    console.log("Your new array has " + count + " values!");
    return newArray;
}
const demoArray = [3, 5, 2, 7, 21, 11, 9, 1, 19];
const myNewArray = createArray(demoArray);
console.log(myNewArray);

// This Length, That Value
function createArray(num1, num2){
    if(num1 == num2){
        console.log("Jinx!")
        return null;
    }
    let array = [];
    for(let i = 0; i < num1; i++){
        array.push(num2);
    }
    return array;
}
let AwesomeArray = createArray(10, 20);
console.log(AwesomeArray);

// Fit the First Value
function perfectSize(arr){
    if(arr[0] > arr.length){
        console.log("Too big!")
    }
    else if(arr[0] < arr.length){
        console.log("Too small!")
    }
    else{
        console.log("Just right!");
    }
}
perfectSize([3, 2, 4]);
perfectSize([5, 10, 7]);
perfectSize([3, 4, 10, 4, 9]);

// Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees){
    if(cDegrees == -40){
        console.log("No convertion needed.")
        return cDegrees;
    }
    const fahrenheit = (cDegrees * (9/5)) + 32;
    return fahrenheit;
}

let myTempinF = celsiusToFahrenheit(-40);
console.log(myTempinF);
