// Push Front
function pushFront(arr, val){
    newArray = [val]
    var j = 1
    for(var i = 0; i < arr.length; i ++){
        newArray[j] = arr[i]
        j++
    }
    return newArray
}
newArray = pushFront([1,2,3], 10)
console.log(newArray)

// Pop Front
function popFront(arr){
    newArray = []
    var j = 0
    for(var i = 1; i < arr.length; i++){
        newArray[j] = arr[i]
        j++
    }
    console.log(newArray)
    return arr[0]
}
console.log(popFront([1,2,3,4,5]))

// Insert At
function insertAt(arr, index, val){
    newArray = []
    var j = 0
    for(var i = 0; i < arr.length + 1; i++){
        if(i == index){
            newArray[i] = val
            continue
        }
        newArray[i] = arr[j]
        j++
    }
    return newArray
}
console.log(insertAt([1,2,3,4,5], 2, 10))
