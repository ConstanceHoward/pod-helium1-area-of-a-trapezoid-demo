let base1Input = prompt("Please provide the length of base 1:")
let base1 = parseInt(base1Input)

let base2Input = prompt("Please provide the length of base 2:")
let base2 = parseInt(base2Input)

let heightInput = prompt("Please provide the height of the trapezoid:")
let height = parseInt(heightInput)

let sumOfBases = base1 + base2
let basesHalved = sumOfBases / 2
let area = basesHalved * height

let message = "<h4>The area of our trapezoid is " + area + "</h4>"

let username = prompt("Hey, what's your name, kid?")
let day = new Date().getDay()

console.log(message)
document.write(message)

let isMonday = day === 1
let isTuesday = day === 2
let userGreeting = null
if (isMonday) {
    userGreeting = "<p>Hello, " + username + ", today is Monday.</p><p>Have a fun day!</p>"
} else if (ifTuesday) {
    userGreeting = "Howdy, " + username + "! It's TACO TUESDAY! You know what that means!"
}

document.write(userGreeting)