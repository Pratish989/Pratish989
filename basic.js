let countEl = document.getElementById("count-el") // pass in arguments
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count = count + 1
    // you can also use thi above line of code as below
    //count += 1 --> also known as plus equal 

    countEl.textContent = count
}


//CONCEPT -  creating a function
// 1. Create a function, save(), which logs out the count when it's called

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
}





// //CONCEPT - String vs Numbers 

// console.log(4 + 12)
// // this will give you answer as 16 because both of them are numbers.

// console.log("100" + 67 )
// // this will give you answer as 10067.  Why? when we add strings and numbers, the string wins. 
// // It will convert the number in to a string and then it will get added to it.

// console.log("100" + "100")


