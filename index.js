function whatIsInAName(collection, source) {

}
const collectionObj = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// function that gives us the keys
function getKeys(arrOfObjs) {
    let result = []
    for (let i = 0; i < arrOfObjs.length; i++) {
        result.push(Object.keys(arrOfObjs[i]))
    }
    return result
}

// function that gives us the values
function getValues(arrOfObjs) {
    let result = []
    for (let i = 0; i < arrOfObjs.length; i++) {
        result.push(Object.values(arrOfObjs[i]))
    }
    return result
}

//  console.log(`This is the object : ${collectionObj}`)
//  console.log(`These are the keys: ${getKeys(collectionObj)}`)
//  console.log (`These are the values: ${getValues(collectionObj)}`)
//  console.log(getValues(collectionObj))
const valuesArr = getValues(collectionObj)

console.log(valuesArr)

function searchValues(arr, str) {
    // const arrLower = arr
    // .map()

    
    // // .map(element => {
    // //     return element.toLowerCase()
    // // })
    // console.log(arrLower)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] === str) {
                return collectionObj[i]
            }
            
        }
        
        
    }
    return false
}
console.log(searchValues(valuesArr, "Capulet")) // fails because valuesArr is not a string

