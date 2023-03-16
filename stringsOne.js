// Remove Blanks
// given a string, returns all of that string’s contents, but without blanks
function removeBlanks(string){
    let newString = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] != " "){
            newString += string[i]
        }
    }
    return newString
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))

// Get Digits
// given a string, returns the integer made from the string’s digits
function getDigits(string){
    let myString = ""
    for(let i = 0; i < string.length; i++){
        if(!isNaN(string[i])){
            // console.log(string[i] + " is not a number")
            myString += string[i]
        }
    }
    return myInteger = Number(myString)
}
console.log(getDigits("abc8c0d1ngd0j0!8"))

// Acronyms
// given a string, returns the string’s acronym (first letter of the word capitalized
function createAcronym(string){
    let acronym = ""
    let start = true
    for(let i = 0; i < string.length; i++){
        if(string[i] != " "){
            if(start){
                acronym += string[i]
                start = false
            }
        } else if(string[i] == " "){
            start = true
        }
    }
    return acronym.toUpperCase()
}
console.log(createAcronym(" Kentucky Fried Chicken"))
console.log(createAcronym(" United States America"))

// Count Non-Spaces
// given a string, returns the number of non-space characters found in the string
function countNonSpaces(string){
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] != " "){
            count++
        }
    }
    return count
}
console.log(countNonSpaces("I am actually going crazy =)"))

// Remove Shorter Strings
// given an array of strings and a numerical value,
// returns an array that only contains strings longer than or equal to the given value.
function removeShorterStrings(arr, num){
    let newArray = []
    let j = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= num){
            newArray[j] = arr[i]
            // console.log("we added a string")
            j++
        }
    }
    return newArray
}
console.log(removeShorterStrings(["Hello", "my", "name", "is", "Samuel"], 3))

