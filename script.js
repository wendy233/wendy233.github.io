
/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {  
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
let ramNum = getRandomIntInclusive(1, 20)

let score = 20
let hiScore = 0

let backG = document.querySelector("body")
let scoreShow = document.querySelector(".score")
let rNum = document.querySelector(".number")

//document.querySelector()
function check(){
  let guess = Number(document.querySelector(".guess").value)
  let message = document.querySelector(".message")
  
  if (guess === ramNum){
    message.innerHTML = "You Win!"
    backG.style.background = 'green' //background color
    rNum.innerHTML = ramNum

    if (score > hiScore) {
      let scoreHigh = document.querySelector(".highscore")
      hiScore = score
      scoreHigh.innerHTML = hiScore
    }
  }
  else if (guess > ramNum) {
    message.innerHTML = "Too High"
    score --
    scoreShow.innerHTML = score
    backG.style.background = '#222'
    rNum.innerHTML = '?'
  }
  else {
    message.innerHTML = "Too Low"
    score --
    scoreShow.innerHTML = score
    backG.style.background = '#222'
    rNum.innerHTML = '?'
  }

  //orgen background if the answer within a range of 2
  if (guess - ramNum == -2 || guess - ramNum == -1){
    backG.style.background = '#CC6600'
    message.innerHTML = "Too Low, but close!"
    rNum.innerHTML = '💪'
  }
  else if ( guess - ramNum == 2 || guess - ramNum ==1) {
    backG.style.background = '#CC6600'
    message.innerHTML = "Too High, but close!"
    rNum.innerHTML = '💪'
  }
}

function again(){
  //background color
  backG.style.background = '#222'

  //Score
  score = 20
  scoreShow.innerHTML = 20

  //?
  let ques = document.querySelector(".number")
  ques.innerHTML = "?"

  //Sentence back to "Guess my number"
  let back = document.querySelector(".message")
  back.innerHTML = "Start guessing..."

  //random number
  ramNum = getRandomIntInclusive(1, 20)

  //guess box back to 0
  guess = document.querySelector(".guess").value = ' '
}


