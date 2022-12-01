let fs = require('fs')

let arrayInput = []
let arrayElves = []
let arrayCalories = []
let maxCalories = 0
let elfNumber = 0

const name = 'Simon'

startTimeStamp()
readPuzzleInput()
calculatePuzzle()
outputResult()
endTimeStamp()

function startTimeStamp() {
  timeStamp = Date.now()
  dateTime = new Date(timeStamp)
  console.log(`OK ${name}, let's win some stars!`)
  console.log(`Start date/time: ` + dateTimeToString(dateTime))
}

function endTimeStamp() {
  timeStamp = Date.now()
  dateTime = new Date(timeStamp)
  console.log(`End date/time: ` + dateTimeToString(dateTime))
}

function dateTimeToString(dateTime) {
  return (
    dateTime.getDate() +
    '/' +
    dateTime.getMonth() +
    '/' +
    dateTime.getFullYear() +
    ' ' +
    dateTime.getHours() +
    ':' +
    dateTime.getMinutes() +
    ':' +
    dateTime.getSeconds() +
    '.' +
    dateTime.getMilliseconds()
  )
}

function readPuzzleInput() {
  arrayInput = fs
    .readFileSync('./resources/puzzleInput.txt')
    .toString()
    .split('\n\n')
}

function calculatePuzzle() {
  arrayElves = arrayInput.map((arrayInput) => arrayInput.split('\n'))

  for (i in arrayElves) {
    let caloriesTotal = 0

    for (let x = 0; x < arrayElves[i].length; x++) {
      caloriesTotal += Number(arrayElves[i][x])
    }
    if (Number(maxCalories) < Number(caloriesTotal)) {
      maxCalories = caloriesTotal
      elfNumber = parseInt(i) + 1
    }
    arrayCalories.push(caloriesTotal)
  }
}

function outputResult() {
  console.log('Number of elves = ' + arrayElves.length)
  console.log(`Highest calories found for an elf = ` + maxCalories)
  console.log(`Elf number with highest calories = ` + elfNumber)
}
