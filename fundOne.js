// Setting and Swapping
var myNumber = 42;
var myName = "Samuel Rodriguez";

var temp = myNumber;
myNumber = myName;
myName = temp;
console.log(myNumber);
console.log(myName);

// Print -52 to 1066
for(var i = -52; i <= 1066; i++){
    console.log(i);
}

// Don't Worry, Be Happy
function beCheerful(){
    console.log("good morning!");
}
for(var i = 1; i <= 98; i++){
    beCheerful();
    console.log("The number is " + i);
}

// Multiples of Three - but Not ALL
for(var i = -300; i <= 0; i++){
    if(i % 3 == 0){
        if(i == -3 || i == -6){
            continue;
        }
        console.log(i);
    }
}

// Printing Integers with While
var i = 2000;
while(i <= 5280){
    console.log(i);
    i++;
}

// You Say It's Your Birthday
function birthday(month, day){
    if(month == 7 || day == 19){
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}
birthday(7, 19);

// Leap Year
function leapYear(year){
    if(year % 100 == 0){
        console.log(year + " is not a leap year...");
    }
    else if(year % 4 == 0){
        console.log(year + " is a leap year!")
    }
    else if(year % 400 == 0) {
        console.log(year + " is a leap year!")
    }
    else{
        console.log(year + " is not a leap year...");
    }
}
leapYear(2023);
leapYear(2024);

// Print and Count
var count = 0;
for(var i = 512; i <= 4096; i++){
    if(i % 5 == 0){
        console.log(i);
        count++;
    }
}
console.log("There were " + count + " multiples of 5");

// Multiples of Six
var i = 0;
while(i <= 60000){
    if(i % 6 == 0){
        console.log(i);
    }
    i++;
}

// Counting, the Dojo Way
for(var i = 1; i <= 100; i++){
    if(i % 10 == 0){
        console.log(i + " Dojo");
    }
    else if(i % 5 == 0){
        console.log(i + " Coding");
    }
    else{
        console.log(i);
    }
}

// What Do You Know?
function what(incoming){
    console.log(incoming);
}
what("This sense makes sentence no.");

// Whoa, That Sucker's Huge
var sum = 0;
for(var i = -300000; i <= 300000; i++){
    if(i % 2 == 1){
        sum += i;
    }
}
console.log("The sum is " + sum);

// Countdown by Fours
var i = 2016;
while(i > 0){
    console.log(i);
    i -= 4;
}

// Flexible Countdown
function countdown(lowNum, highNum, mult){
    for(var i = highNum; i >= lowNum; i--){
        if(i % mult == 0){
            console.log(i);
        }
    }
}
countdown(2, 9, 3);

// The Final Countdown
function finalCountdown(mult, start, end, exception){
    while(start <= end){
        if(start % mult == 0 && start != exception){
            console.log(start);
        }
        start++;
    }
}
finalCountdown(3,5,17,9);