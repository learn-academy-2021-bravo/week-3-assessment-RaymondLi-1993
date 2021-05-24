// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe ("fib", ()=>{
    test ("returns the fibonacci sequence upto given length of input", () =>{
        expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})




// b) Create the function that makes the test pass.

//I will create a starter array to reference against to get the numbers of fibonacci sequence
//the trick here is to reference back to the current index and index - 1
//add them together push into new array and repeat

const fib = (n) => {
    let array = [1,1];
    
    for (let i = 2; i < n; i++){
       array.push(array[i- 1] + array[i - 2]); 
    }
    return array;
 }



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


describe ("checkOdds", ()=>{
    test ("returns if the number is specially a string, is odd, and sorts from least to greatest", () =>{
        expect(checkOdds(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(checkOdds(fullArr2)).toEqual([-823, 7, 23])
    })
})



// b) Create the function that makes the test pass.

//function that will take in elements within an array and check for numbers
// check for specifically numbers and return them only if they're odd
//sort the numbers from least to greatest using sort method

const checkOdds = (array) => {
    return result = array.filter((elem) => {
        if(typeof elem === "number"){
            return elem % 2 !== 0;
        }
    }).sort((a,b) => {return a - b}); 
 }

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe ("addSums", ()=>{
    test ("returns an array of sums", () =>{
        expect(addSums(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(addSums(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(addSums(numbersToAdd3)).toEqual([])
    })
})



// b) Create the function that makes the test pass.

//The expected output is an array of sums from the previous number
//I can create a variable that will hold the previous sum
//I can create an empty array that will hold the sums of the current itteration.
//return the array with the sums 

const addSums = (array) => {
    let result = [];
    let total = 0;

    array.forEach((elem) => {
       
       result.push(total += elem); 
    })

    return result;
}



