// intro to Javascript -- web vs node, ECMA
// https://www.w3schools.com/js/js_versions.asp
console.log("Hello")

// ------------- Hoisting -------------
// console.log(petname)
var petname = "pepper";
// console.log(petname);


//  ------------- const & let ------------
const stack = "Javascript" // cannot be reassigned
let instructor = "Narciso" // can be reassigned
instructor = "Heidi"

for(let i=0; i<5; i++){
    console.log(i)
}

const reminders = ["drink water", "take a break", "do the assignments"]
reminders[0] = "drink coconut water"
reminders.push("gym");
console.log(reminders)


// ------------- scope ------------
const myName = "Heidi" // global scope

function changeName(){
    const myName = "Pepper"
    console.log(myName)  // search for local scope , then global 
}

changeName()
console.log(myName) // 


// ------------- destructuring ------------
const person = { 
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
    

const {firstName, lastName, email} = person
// const firstName = person["firstName"]
// const lastName = person["lastName"]
// const email = person["email"]

console.log(firstName)
console.log(lastName)
console.log(email)

const [firstAnimal, , thirdAnimal] = animals 
// const firstAnimal = animals[0]
// const thirdAnimal = animals[2]  
console.log(firstAnimal) 
console.log(thirdAnimal)
// ------------- spread/rest ------------



// ------------- arrow function ------------


// ------------- ternary operator ------------