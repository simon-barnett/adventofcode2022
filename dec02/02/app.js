let fs = require('fs')

let arrayInput = []

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
  arrayInput = fs.readFileSync('./resources/puzzleInput.txt').toString().split('\n')
}

function modifier(left, right) {
  //lose
  if (right === 'X') {
    if (left === 'A') {
      return 'Z'
    }
    if (left === 'B') {
      return 'X'
    }
    if (left === 'C') {
      return 'Y'
    }
  }

  //draw
  if (right === 'Y') {
    if (left === 'A') {
      return 'X'
    }
    if (left === 'B') {
      return 'Y'
    }
    if (left === 'C') {
      return 'Z'
    }
  }

  //win
  if (right === 'Z') {
    if (left === 'A') {
      return 'Y'
    }
    if (left === 'B') {
      return 'Z'
    }
    if (left === 'C') {
      return 'X'
    }
  }
}

function calculatePuzzle() {
  totalscore = Number(0)
  for (i in arrayInput) {
    let arrayTemp = arrayInput[i].split(' ')
    let win = false
    let lose = false
    let draw = false
    let firstSetOfScore = Number(0)
    let secondSetOfScore = Number(0)
    let response = ''

    response = modifier(arrayTemp[0], arrayTemp[1])

    //first set of score
    if (response === 'X') {
      firstSetOfScore = 1
    }
    if (response === 'Y') {
      firstSetOfScore = 2
    }
    if (response === 'Z') {
      firstSetOfScore = 3
    }

    //left rock...
    if (arrayTemp[0] === 'A') {
      if (response === 'X') {
        win = false
        lose = false
        draw = true
      }
      if (response === 'Y') {
        win = true
        lose = false
        draw = false
      }
      if (response === 'Z') {
        win = false
        lose = true
        draw = false
      }
    }

    //left paper...
    if (arrayTemp[0] === 'B') {
      if (response === 'X') {
        win = false
        lose = true
        draw = false
      }
      if (response === 'Y') {
        win = false
        lose = false
        draw = true
      }
      if (response === 'Z') {
        win = true
        lose = false
        draw = false
      }
    }

    //left scissors...
    if (arrayTemp[0] === 'C') {
      if (response === 'X') {
        win = true
        lose = false
        draw = false
      }
      if (response === 'Y') {
        win = false
        lose = true
        draw = false
      }
      if (response === 'Z') {
        win = false
        lose = false
        draw = true
      }
    }

    //second set of score
    if (lose) {
      secondSetOfScore = 0
    }
    if (draw) {
      secondSetOfScore = 3
    }
    if (win) {
      secondSetOfScore = 6
    }

    totalscore += firstSetOfScore + secondSetOfScore
  }
}

function outputResult() {
  console.log('Strategy guide total score = ' + totalscore)
}
