// const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3

// let dolphinsAverage = calcAverage(44, 23, 71)
// let koalasAverage = calcAverage(65, 54, 49)

// const checkWinner = (koalas, dolphins) => {
//   if (koalas >= dolphins * 2) {
//     return 'Koalas win!'
//   } else if (dolphins >= koalas * 2) {
//     return 'Dolphins win!'
//   } else {
//     return 'No team wins'
//   }
// }

// dolphinsAverage = calcAverage(84, 55, 41)
// koalasAverage = calcAverage(23, 34, 27)

// console.log(checkWinner(koalasAverage, dolphinsAverage))
// // console.log(checkWinner(200, 100))
// const ianObj = {
//   firstName: 'ian',
//   lastName: 'blakeslee',
//   age: 26,
//   job: 'student',
//   gf: 'savannah',
//   friends: ['zack', 'david', 'mason'],
// }

// for (let key in ianObj) {
//   console.log(`${key}: ${ianObj[key]}`)
// }

// console.log(ianObj['lastName'])

// const nameKey = 'Name'

// console.log(ianObj['first' + nameKey])           /// same as ianObj['firstName]
// console.log(ianObj['last' + nameKey])            /// same as ianObj['lastName]

// ianObj.location = 'St pete'
// ianObj['favFood'] = 'sushi'

// console.log(ianObj)

//challenge
//Ian has 3 friends and his gf friend is called micheal

// console.log(
//   `${ianObj.firstName} has ${ianObj.friends.length} friends and his gf is called ${ianObj.gf}`
// )

// const ianObj = {
//   firstName: 'ian',
//   lastName: 'blakeslee',
//   birthYear: 1996,
//   job: 'student',
//   friends: ['zack', 'david', 'mason'],
//   hasDriversLicense: true,

//   calcAge: function () {
//     // @ts-ignore
//     this.age = 2022 - this.birthYear
//     return this.age
//   },
//   getSummary: function () {
//     if (this.hasDriversLicense) {
//       return `${this.firstName} is a ${this.calcAge()} year old ${
//         this.job
//       }, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//     }
//   },
// }

// console.log(ianObj.calcAge()) //console.log(ianObj['calcAge'](1996))
// console.log(ianObj.age)
// console.log(ianObj.getSummary())
// let bookings = []
// const createBooking = (
//   flightNum,
//   numPassangers = 1,
//   price = 199 * numPassangers
// ) => {
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   }
//   console.log(booking)
//   bookings.push(booking)
// }
// console.log(createBooking('LH123', 25))

// const flight = 'LH234'
// const ian = {
//   name: 'Ian B',
//   passport: 123123123123,
// }
// const checkIn = (flightNum, passenger) => {
//   flightNum = 'LH999'
//   passenger.name = 'Mr. ' + passenger.name
//   if (passenger.passport === 123123123123) {
//     console.log('check in')
//   } else console.log('wrong passport')
// }
// // checkIn(flight, ian)
// // console.log(flight)
// // console.log(ian)

// const newPassport = (person) => {
//   person.passport = Math.trunc(Math.random() * 10000000000)
// }
// newPassport(ian)
// checkIn(flight, ian)
// console.log(ian)

// const oneWord = (str) => {
//   return str.replace(/ /g, '').toLowerCase()
// }
// const upperFirstWord = (str) => {
//   const [first, ...others] = str.split(' ')
//   return [first.toUpperCase(), ...others].join(' ')
// }

// //higher order function (cb - callback function)
// const transformer = (str, cb) => {
//   console.log(`original string: ${str}`)
//   console.log(`transformed string: ${cb(str)}`)
//   console.log(`transformed by: ${cb.name}`)
// }

// transformer('Javascript is the best!', upperFirstWord)

// transformer('Javascript is the best!', oneWord)

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`)
  }
}
// one line
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`)

//the function greet returns a anonymous function that is then assigned to greeterHey, and that function takes in a name, and already has greet'hey' saved to it
const greeterHey = greet('Hey')
greeterHey('Ian')
greeterHey('Lol')

//or
greet('AsuhDUh')('Savannah')
