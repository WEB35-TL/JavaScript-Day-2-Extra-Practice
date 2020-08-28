// Use Array Methods to solve the tasks below 🎉

const toppings = [
  'Mushrooms',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
]

/*
TASK 1 🚀
// The customer would like to see the topping options, console log out each of the toppings one by one in the array above 
*/

const removeTopping = (arr, topping) => {
  toppings.forEach((x, i) => (x === topping ? toppings.splice(i, 1) : null))
  console.log(arr)
}

removeTopping(toppings, 'Mushrooms')

/*
TASK 2 🚀
// write a function that accepts an array and an item and removes that item from the array
for example you no longer have any onions and need to remove it from the list of toppings
Use .forEach() - hint - you will need to include the index in the callback
 */

/*
TASK 3 🚀
// Sort the topping alphabetically and return them in a new array 
*/

const alphabetToppings = arr => arr.sort()
console.log(alphabetToppings(toppings))

const vacations = [
  {
    city: 'Toronto',
    country: 'Canada',
    region: 'North America',
    temperature: 86,
    beach: true,
    sea: false,
    wifi: 'strong',
    hiking: false,
    overall_rating: 6,
  },
  {
    city: 'Miami',
    country: 'United States',
    region: 'North America',
    temperature: 95,
    beach: true,
    sea: true,
    wifi: 'strong',
    hiking: false,
    overall_rating: 8,
  },
  {
    city: 'Tel Aviv',
    country: 'Israel',
    region: 'Middle East',
    temperature: 102,
    beach: true,
    sea: true,
    wifi: 'strong',
    hiking: true,
    overall_rating: 10,
  },
  {
    city: 'Istanbul',
    country: 'Turkey',
    region: 'Europe',
    temperature: 86,
    beach: false,
    sea: false,
    wifi: 'medium',
    hiking: true,
    overall_rating: 7,
  },
  {
    city: 'Bangkok',
    country: 'Thailand',
    region: 'South East Asia',
    temperature: 101,
    beach: false,
    sea: false,
    wifi: 'medium',
    hiking: false,
    overall_rating: 5,
  },
  {
    city: 'Lima',
    country: 'Peru',
    region: 'South America',
    temperature: 86,
    beach: false,
    sea: false,
    wifi: 'weak',
    hiking: true,
    overall_rating: 7,
  },
  {
    city: 'Muscat',
    country: 'Oman',
    region: 'Middle East',
    temperature: 105,
    beach: true,
    sea: true,
    wifi: 'strong',
    hiking: true,
    overall_rating: 9,
  },
  {
    city: 'Sydney',
    country: 'Australia',
    region: 'Oceania',
    temperature: 92,
    beach: true,
    sea: true,
    wifi: 'strong',
    hiking: true,
    overall_rating: 8,
  },
  {
    city: 'Cape Town',
    country: 'South Africa',
    region: 'Africa',
    temperature: 87,
    beach: true,
    sea: true,
    wifi: 'medium',
    hiking: true,
    overall_rating: 10,
  },
  {
    city: 'Cancun',
    country: 'Mexico',
    region: 'North America',
    temperature: 95,
    beach: true,
    sea: true,
    wifi: 'medium',
    hiking: false,
    overall_rating: 7,
  },
]

/*
TASK 4 🚀
// The travel agent would like to send a couple on their honeymoon to a location with a beach and a temperature above 90 degrees. return their options in a new array 
*/

function honeyMoon(arr) {
  let newArr = []

  arr.map(x => {
    if (x.beach === true && x.temperature > 90) {
      newArr.push(x)
    }
  })

  return newArr
}

console.log(honeyMoon(vacations))

/*
TASK 5 🚀
// A developer decides to become a digital nomad for a year, they would like to live in a place with strong wifi, a beach, and good hiking, return their options
*/

function digitalNomad(arr) {
  let newArr = []

  arr.map(x => {
    if (x.wifi === 'strong' && x.beach === true && x.hiking === true) {
      newArr.push(x)
    }
  })

  return newArr
}

console.log(digitalNomad(vacations))

/* 
TASK 6 🚀
// write a function that allows a user to sort their vacations by hiking opportunities, beach access or a mix of both and return their options
*/

function sortVacations(arr, option) {
  let newArr = []

  arr.map(x => {
    if (option === 'Beach') {
      if (x.beach === true) {
        newArr.push(x)
      }
    } else if (option === 'Hiking') {
      if (x.hiking === true) {
        newArr.push(x)
      }
    } else if (option === 'Beach and Hiking') {
      if (x.beach === true && x.hiking === true) {
        newArr.push(x)
      }
    }
  })

  return newArr
}

console.log(sortVacations(vacations, 'Beach'))
console.log(sortVacations(vacations, 'Hiking'))
console.log(sortVacations(vacations, 'Beach and Hiking'))

/* 
TASK 7 🚀
// write a function that finds the average of overall ratings in a given array. The function should take an array as its argument and should return the average of the overall ratings in that array 
hint - use .reduce()
*/

function findAverage(arr) {
  return arr.reduce((a, b) => a + b.overall_rating, 0) / arr.length
}

console.log(findAverage(vacations))

/*
TASK 8 🚀
Find the airport codes for each of the cities in the vacation array and write a function to add them to the objects in the array
hint - your function should include array, index and code as parameters
you will need to invoke the function each time you wish to add a new code
*/

function airportCodes(array, index, code) {
  return (array[index].code = code)
}

console.log(airportCodes(vacations, 0, 'YYZ'))
console.log(airportCodes(vacations, 1, 'MIA'))
console.log(airportCodes(vacations, 2, 'TLV'))

console.log(vacations)

/*
 Toronto: YYZ
 Miami: MIA
 Tel Aviv: TLV
 Istanbul: IST
 Bangkok: BKK
 Lima: LIM
 Muscat: MCT
 Sydney: SYD
 Cape Town: CPT
 Cancun: CUN
 */
