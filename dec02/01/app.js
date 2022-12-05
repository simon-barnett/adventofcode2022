let fs = require('fs')

let arrayInput = []
let arrayTemp = []

readPuzzleInput()
calculatePuzzle()
outputResult()

function readPuzzleInput() {
  arrayInput = fs.readFileSync('./resources/puzzleInput.txt').toString().split('\n')
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

    //first set of score
    if (arrayTemp[1] == 'X') {
      firstSetOfScore = 1
    }
    if (arrayTemp[1] == 'Y') {
      firstSetOfScore = 2
    }
    if (arrayTemp[1] == 'Z') {
      firstSetOfScore = 3
    }

    //left rock...
    if (arrayTemp[0] == 'A') {
      //right rock
      if (arrayTemp[1] == 'X') {
        win = false
        lose = false
        draw = true
      }
      //right paper
      if (arrayTemp[1] == 'Y') {
        win = true
        lose = false
        draw = false
      }
      //right scissors
      if (arrayTemp[1] == 'Z') {
        win = false
        lose = true
        draw = false
      }
    }

    //left paper...
    if (arrayTemp[0] == 'B') {
      //right rock
      if (arrayTemp[1] == 'X') {
        win = false
        lose = true
        draw = false
      }
      //right paper
      if (arrayTemp[1] == 'Y') {
        win = false
        lose = false
        draw = true
      }
      //right scissors
      if (arrayTemp[1] == 'Z') {
        win = true
        lose = false
        draw = false
      }
    }

    //left scissors...
    if (arrayTemp[0] == 'C') {
      //right rock
      if (arrayTemp[1] == 'X') {
        win = true
        lose = false
        draw = false
      }
      //right paper
      if (arrayTemp[1] == 'Y') {
        win = false
        lose = true
        draw = false
      }
      //right scissors
      if (arrayTemp[1] == 'Z') {
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
